// AI bot – in /ai/heuristic_bot.ts import only TrucoState and expose decide(state): Action.



if phase == bidding:
    if score.me <= 6 and hasStrongHand(hand):  call 'Truco'
    else if score.me > 6 and weakHand(hand):   decline bids
    …
if phase == trick:
    if winningCardInHand(): playLowestWinning()
    else playLowestCard()

