// utils/response.ts
export const success = (data: any, message = 'OK', statusCode = 200) => ({
  statusCode,
  message,
  data,
});

export const error = (
  message: string,
  statusCode = 400,
  errors?: Record<string, any>,
) => ({
  statusCode,
  message,
  ...(errors && { errors }),
});
