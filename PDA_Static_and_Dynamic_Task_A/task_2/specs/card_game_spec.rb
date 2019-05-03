require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card.rb')

class CardGameTest < MiniTest::Test

  def setup

    @card1 = Card.new('spades', 5)
    @card2 = Card.new('diamonds', 11)
    @card3 = Card.new('hearts', 1)

    @cards = [@card1, @card2, @card3]

  end

  def test_if_card_is_an_ace()
    assert_equal(true, CardGame.checkforAce(@card3))
  end

  def test_return_the_card_with_the_higher_value()
    assert_equal(@card1, CardGame.highest_card(@card1, @card3))
  end

  def test_the_total_amount_of_the_cards()
    assert_equal('You have a total of 17', CardGame.cards_total(@cards))
  end

end
