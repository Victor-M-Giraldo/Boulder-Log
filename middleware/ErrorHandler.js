export default function ErrorHandler(err, req, res, _next) {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message });
}
