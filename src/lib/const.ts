export const __IS_DEV__ = process.env.NODE_ENV === "development";

export const COUNT_ITEMS_ON_PAGE = 9;

export const DOMAIN_TITLE = __IS_DEV__
    ? "http://localhost:3000"
    : "http://localhost:3000";

export const DOMAIN_API = `${DOMAIN_TITLE}/api/`;
