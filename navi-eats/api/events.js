export default async function handler(req, res) {
  const { query = '' } = req.query;
  const apiKey = process.env.TICKETMASTER_API_KEY;

  if (!apiKey) {
    return res.status(200).json({ events: [] });
  }

  try {
    const url = new URL('https://app.ticketmaster.com/discovery/v2/events.json');
    url.searchParams.set('apikey', apiKey);
    url.searchParams.set('keyword', 'food');
    url.searchParams.set('city', query);
    url.searchParams.set('size', '5');

    const response = await fetch(url.toString());
    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json({ error: data.error || 'Events request failed' });
    }

    const events = (data._embedded?.events || []).map((event) => ({
      id: event.id,
      title: event.name,
      date: event.dates?.start?.localDate,
      location: event._embedded?.venues?.[0]?.name || 'Unknown',
      url: event.url,
      description: event.info || 'Culinary event in your area.',
    }));

    return res.status(200).json({ events });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Event lookup failed' });
  }
}
