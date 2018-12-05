Q1.
db.zips.aggregate(
[{$match : {state: "IA"}},
	{$group: {_id: {"city": "$city", "state": "$state"}}},
])
Q2.
db.zips.aggregate(
[{$match : {pop: {$gt: 1000}}}
])
Q3. 
db.zips.aggregate(
[
{$group: {_id: {"city": "$city"}, sum_zip:{$sum: 1}}},
	{$match: {sum_zip: {$gt: 1}}},
{$sort: {state:1, city:1}}
]
)
Q4. 
db.zips.aggregate(
[
{$group: {_id: {"city": "$city", "state": "$state"}, population:{$min: "$pop"}}}
]
)