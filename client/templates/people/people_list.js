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

Template.peopleList.helpers({
	people: peopleData
});