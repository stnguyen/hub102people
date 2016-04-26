if (People.find().count() == 0) {
	// clean database, let's populate it with init data
	const peopleData = [
		{
			name: "Stefan Nguyen",
			url: "http://stnguyen.com"
		},
		{
			name: "Tony Nguyen",
			url: "https://www.facebook.com/nguyenphu.thien?fref=ts"
		}
	];

	peopleData.forEach(function (person) {
		console.log(person);
		People.insert(person);
	});
}