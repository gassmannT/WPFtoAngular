export interface HomeTeamStatistics {
  attempts_on_goal: number;
  on_target: number;
  off_target: number;
  blocked: number;
  woodwork: number;
  corners: number;
  offsides: number;
  ball_possession: number;
  pass_accuracy: number;
  num_passes: number;
  passes_completed: number;
  distance_covered: number;
  balls_recovered: number;
  tackles: number;
  clearances: number;
  yellow_cards: number;
  red_cards: number;
  fouls_committed: number;
  country: string;
}

export interface AwayTeamStatistics {
  attempts_on_goal: number;
  on_target: number;
  off_target: number;
  blocked: number;
  woodwork: number;
  corners: number;
  offsides: number;
  ball_possession: number;
  pass_accuracy: number;
  num_passes: number;
  passes_completed: number;
  distance_covered: number;
  balls_recovered: number;
  tackles: number;
  clearances: number;
  yellow_cards: number;
  red_cards: number;
  fouls_committed: number;
  country: string;
}

export interface HomeTeam {
  country: string;
  code: string;
  goals: number;
}

export interface AwayTeam {
  country: string;
  code: string;
  goals: number;
}

export interface HomeTeamEvent {
  id: number;
  type_of_event: string;
  player: string;
  time: string;
}

export interface AwayTeamEvent {
  id: number;
  type_of_event: string;
  player: string;
  time: string;
}

export interface Game {
  MatchInfo1: string;
  MatchInfo2: string;
  MatchInfo3: string;
  MatchInfo4: string;
  Description: string;
  FlagUri: string;
  venue: string;
  location: string;
  status: string;
  time: string;
  fifa_id: string;
  home_team_statistics: HomeTeamStatistics;
  away_team_statistics: AwayTeamStatistics;
  datetime: Date;
  last_event_update_at: Date;
  last_score_update_at: Date;
  home_team: HomeTeam;
  away_team: AwayTeam;
  winner: string;
  winner_code: string;
  home_team_events: HomeTeamEvent[];
  away_team_events: AwayTeamEvent[];
}
