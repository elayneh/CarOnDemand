import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('Success');
  } catch (err) {
    next(err); // Pass the error to the error handling middleware
  }
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // Handle the error, for instance, log it
  console.error(err);
  res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
