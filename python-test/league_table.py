from collections import Counter
from collections import OrderedDict

class LeagueTable:
    def __init__(self, players):
        self.standings = OrderedDict([(player, Counter()) for player in players])
       
    def record_result(self, player, score):
        self.standings[player]['games_played'] += 1
        self.standings[player]['score'] += score
     
    def player_rank(self, rank):
        sorted_players = sorted(self.standings.keys(), key=lambda x: (-self.standings[x]['score'], self.standings[x]['games_played'], list(self.standings.keys()).index(x)))
        return sorted_players[rank - 1]

if __name__ == "__main__":
    table = LeagueTable(['Mike', 'Chris', 'Arnold'])
    table.record_result('Mike', 2)
    table.record_result('Mike', 3)
    table.record_result('Arnold', 5)
    table.record_result('Chris', 5)
    print(table.player_rank(1))

