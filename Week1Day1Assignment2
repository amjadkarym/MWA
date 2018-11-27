function isWeekend() {
	const todayDate = new Date();
	const day = todayDate.getDay();
	const { of } = rxjs;
	const { filter } = rxjs.operators;
	of(0)
	.pipe(
filter(n => n>0)
	)
	.subscribe(
		(x) => console.log("Weekdays"),
		(z) => console.log("Weekend"),
		null
	)
}
isWeekend();
