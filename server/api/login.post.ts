export default eventHandler(async (event) => {
  const { adminPassword } = useRuntimeConfig();

  if (!adminPassword) {
    throw createError({
      statusCode: 500,
      message: "Missing ADMIN_PASSWORD environment variable",
    });
  }

  const payload = await readBody(event);

  if (payload?.password !== adminPassword) {
    throw createError({
      statusCode: 401,
      message: "Wrong password",
    });
  }

  await setUserSession(event, {
    user: { admin: true },
  });
});
