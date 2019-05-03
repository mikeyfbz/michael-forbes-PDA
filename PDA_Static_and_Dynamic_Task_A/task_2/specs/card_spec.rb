require('minitest/autorun')
require('minitest/rg')
require_relative('../card.rb')

class CardTest < MiniTest::Test

  def setup

    @card1 = Card.new('hearts', '3')
    @card2 = Card.new('clubs', '10') 

  end

  def test_card_has_a_suit()
    assert_equal('hearts', @card1.suit())
  end

  def test_card_has_a_value()
    assert_equal('10', @card2.value())
  end

end
