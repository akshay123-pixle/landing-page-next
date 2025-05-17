export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, clickedComponent } = req.body;

    console.log('Email Submitted:', email);
    console.log('Clicked Component:', clickedComponent);

    res.status(200).json({ message: 'Email received' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
