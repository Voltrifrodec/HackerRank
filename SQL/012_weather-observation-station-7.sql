-- Basic Select - Weather Observation Station 7

SELECT DISTINCT CITY FROM STATION
WHERE LOWER(RIGHT(CITY,1)) IN ('a','e','i','o','u');