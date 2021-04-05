const exampleData = {
  someUserEmail: {
    fullname: "grabbed from google auth",
    zipcode: "user input upon sign up",
    accessRole: "admin or viewOnly",
    onMoveTeamOf: ["smoveId", "smoveId"], // these are the smooveIds that they're just a contributor to, so we can validate they have access
    smoves: [
      {  // the 1 is a smooveId
        smoveName: "someName1",
        isCurrentSmove: true,
        oldAddress: '123 Fake St',
        newAddress: '456 Real St.',
        favCompanies: [
          {
            companyName: "Great company 1",
            url: "www.greatcompany1.com"
          },
          {
            companyName: "Great company 2",
            url: "www.greatcompany2.com"
          },
          {
            companyName: "Great company 2",
            url: "www.greatcompany3.com"
          },
        ],
        tasks: [
          {
            name: 'task1',
            location: 'old house',
            startDate: '2021-04-20T09:00:00-07:00',
            endDate: '2021-04-20T09:00:00-07:00',
            assignedTo: ["someUserEmail1", "someUserEmail2"],
            category: "moving",
            status: "not started",
            company: {
              companyName: "Great company 1",
              url: "www.greatcompany1.com"
            }
          },
          {
            name: 'task2',
            location: 'old house',
            startDate: '2021-04-21T09:00:00-07:00',
            endDate: '2021-04-21T09:00:00-07:00',
            assignedTo: ["someUserEmail1", "someUserEmail2"],
            category: "moving",
            status: "not started",
            company: {
              companyName: "Great company 1",
              url: "www.greatcompany1.com"
            }
          },
          {
            name: 'task3',
            location: 'old house',
            startDate: '2021-04-20T09:00:00-07:00',
            endDate: '2021-04-20T09:00:00-07:00',
            assignedTo: ["someUserEmail1", "someUserEmail2"],
            category: "moving",
            status: "not started",
            company: {
              companyName: "Great company 1",
              url: "www.greatcompany1.com"
            }
          },
        ],
        inventory: [
          {
            boxNum: 1,
            originRoom: 'kitchen',
            destinationRoom: 'bathroom',
            boxPriority: 'urgent',
            notes: "this box has some random stuff from the kitchen"
          },
          {
            boxNum: 2,
            originRoom: 'kitchen',
            destinationRoom: 'bathroom',
            boxPriority: 'urgent',
            notes: "this box has some fragile ceramics from the kitchen"
          }
        ],
        moveTeam: ["someUserEmail1", "someUserEmail2", "someUserEmail3"] // we don't need to store more than the username because we can query the username itself to get more details
      },
      {
        smoveName: "someName2",
        isCurrentSmove: true,
        oldAddress: '123 Fake St',
        newAddress: '456 Real St.',
        favCompanies: [
          {
            companyName: "Great company 1",
            url: "www.greatcompany1.com"
          },
          {
            companyName: "Great company 2",
            url: "www.greatcompany2.com"
          },
          {
            companyName: "Great company 2",
            url: "www.greatcompany3.com"
          },
        ],
        tasks: [
          {
            name: 'task1',
            location: 'old house',
            startDate: '2021-04-20T09:00:00-07:00',
            endDate: '2021-04-20T09:00:00-07:00',
            assignedTo: ["someUserEmail1", "someUserEmail2"],
            category: "moving",
            status: "not started",
            company: {
              companyName: "Great company 1",
              url: "www.greatcompany1.com"
            }
          },
          {
            name: 'task2',
            location: 'old house',
            startDate: '2021-04-21T09:00:00-07:00',
            endDate: '2021-04-21T09:00:00-07:00',
            assignedTo: ["someUserEmail1", "someUserEmail2"],
            category: "moving",
            status: "not started",
            company: {
              companyName: "Great company 1",
              url: "www.greatcompany1.com"
            }
          },
          {
            name: 'task3',
            location: 'old house',
            startDate: '2021-04-20T09:00:00-07:00',
            endDate: '2021-04-20T09:00:00-07:00',
            assignedTo: ["someUserEmail1", "someUserEmail2"],
            category: "moving",
            status: "not started",
            company: {
              companyName: "Great company 1",
              url: "www.greatcompany1.com"
            }
          },
        ],
        inventory: [
          {
            boxNum: 1,
            originRoom: 'kitchen',
            destinationRoom: 'bathroom',
            boxPriority: 'urgent',
            notes: "this box has some random stuff from the kitchen"
          },
          {
            boxNum: 2,
            originRoom: 'kitchen',
            destinationRoom: 'bathroom',
            boxPriority: 'urgent',
            notes: "this box has some fragile ceramics from the kitchen"
          }
        ],
        moveTeam: ["someUserEmail1", "someUserEmail2", "someUserEmail3"]
      },
    ]
  }
}