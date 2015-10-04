json.array!(@high_scores) do |high_score|
  json.extract! high_score, :id, :game, :score
  json.url high_score_url(high_score, format: :json)
end
