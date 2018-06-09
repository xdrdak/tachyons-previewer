const TOKEN_GROUPER_TYPES = {
  READ_ONLY: 'read',
  EDITABLE: 'edit',
};

function createItem(tokens, type) {
  return { tokens, type };
}

function handleTypeFence(acc, token) {
  return [...acc, createItem(token, TOKEN_GROUPER_TYPES.EDITABLE)];
}

function handleTypeAny(acc, token) {
  const lastItem = acc[acc.length - 1] || [];
  const restTokens = lastItem.tokens ? [...lastItem.tokens] : [];

  const item = createItem(
    [...restTokens, token],
    TOKEN_GROUPER_TYPES.READ_ONLY,
  );

  if (acc.length === 0 || lastItem.type === TOKEN_GROUPER_TYPES.EDITABLE) {
    return [...acc, item];
  }

  acc[acc.length - 1] = item;
  return acc;
}

function tokenGrouper(tokens = []) {
  const nextTokens = tokens.reduce((acc, token) => {
    if (token.type === 'fence' && token.tag === 'code') {
      return handleTypeFence(acc, token);
    }

    return handleTypeAny(acc, token);
  }, []);

  return nextTokens;
}

export { TOKEN_GROUPER_TYPES, tokenGrouper };

export default tokenGrouper;
