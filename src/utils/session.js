export const setSession = (key, value) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(key, JSON.stringify(value));
    document.cookie = `${key}=${JSON.stringify(value)}; path=/`;
  }
};

export const getSession = (request, key) => {
  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) return null;

  const cookies = Object.fromEntries(
    cookieHeader
      .split("; ")
      .map((cookie) => cookie.split("=").map(decodeURIComponent)),
  );

  const session = cookies[key];

  try {
    return session ? JSON.parse(session) : null;
  } catch (error) {
    return null;
  }
};

export const getSessionType = (key) => {
  if (typeof window !== "undefined") {
    const session = JSON.parse(sessionStorage.getItem(key));
    return session ? session.password : null;
  }
};
