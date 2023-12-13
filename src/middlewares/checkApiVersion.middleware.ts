import { NextFunction, Request, Response } from "express";

export function checkApiVersion(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { version } = req.params;

  if (version !== "1") {
    res.status(401).json({
      status: false,
      message: `Api v${version} not available. Refer to cookeasy docs`,
    });
  } else {
    next();
  }
}

export function apiWelcome(req: Request, res: Response) {
  const { version } = req.params;

  res.status(200).json({
    status: true,
    message: `Welcome to cookeasy api v${version}`,
  });
}
