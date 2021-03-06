const { setupTests } = global;
setupTests('focus', 'events/modules/Focus');

describe('focus()', () => {
  it('fires a callback when triggered', () => {
    let i = 0;
    $('#jest-focus').focus(() => {
      i += 1;
    });
    $('#jest-focus').focus();
    expect(i).toBe(1);
  });
});
