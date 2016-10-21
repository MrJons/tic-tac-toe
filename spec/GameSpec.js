describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should be able to switch player", function() {
    game.switchPlayer();
    expect(game.currentPlayer).toEqual("O");
  });
});
