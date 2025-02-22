export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: "/api/v1/auth/login",
    REFRESH_TOKEN: "/api/v1/auth/refresh",
  },
  // User endpoints
  USER: {
    GET: "/api/v1/users/me",
    GET_BY_ID: "/api/v1/users/{id}",
    GET_ALL: "/api/v1/users",
  },
  // Energy allocation endpoints
  ENERGY: {
    GET_CONSUMPTION_SUMMARY: "/api/v1/energy/consume/summary",
    GET_CONSUMPTION_SUMMARY_BY_USER: "/api/v1/energy/consume/{userId}/summary",
  },
};
