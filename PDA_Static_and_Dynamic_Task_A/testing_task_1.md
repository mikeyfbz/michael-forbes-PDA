### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card)
  if card.value = 1 #this assigns card.value to 1, not checks if it is the same as to return a boolean
      return true
    else
      return false
    end
  end

dif highest_card(card1 card2) #it is 'def' not 'dif',this also needs to be a class method, there needs to be a comma between these two variables
  if card1.value > card2.value
  return card #card is not a variable that is defined for use in this method, should be card1
  else
    return card2
  end
end
end #this end should be at the end of all the code

def self.cards_total(cards)
total   #total is not assigned to anything so it would not be a usable variable, total = 0 would work
  for card in cards
    total += card.value
    return "You have a total of" + total #the return needs to be moved out of this for loop so that it doesn't return each amount as it increases
  end
end
```
