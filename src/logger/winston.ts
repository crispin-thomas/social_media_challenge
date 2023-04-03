import { createLogger, format, transports } from "winston";
const { combine, timestamp, errors, printf, prettyPrint } = format;

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warn";
};

const myFormat = combine(
  errors({ stack: true }),
  prettyPrint(),
  timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  printf(
    ({ message, level, timestamp, stack }) =>
      `[${timestamp}][${level}] - ${message} \n ${stack ? stack : ""}`
  )
);

const transport = [
  new transports.Console(),
  new transports.File({
    filename: "logs/error.log",
    level: "error",
  }),
  new transports.File({ filename: "logs/all.log" }),
];

const winstonLogger = createLogger({
  level: level(),
  levels,
  format: myFormat,
  transports: transport,
});

export default winstonLogger;
