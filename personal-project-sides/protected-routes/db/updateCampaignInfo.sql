UPDATE campaigns
SET (name, organization, orglogo, type, scope, description, active) =
($1, $2, $3, $4, $5, $6, $7)

WHERE campaign_id = $8