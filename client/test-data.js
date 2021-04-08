const exampleData = {
  someUserEmail: {
    email: 'JHold@gmail.com',
    name: 'Jesse Smith',
    image: 'sampleimage.png',
    zipcode: 98100,
    onSmoveTeam: ["someName1", "someName2"],
    smoves: [
      {
        smoveName: "someName1",
        isCurrentSmove: true,
        oldAddress: '123 Fake St',
        newAddress: '456 Real St.',
        smoveDate: "Jan 1, 2000",
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
      {
        smoveName: "someName2",
        isCurrentSmove: true,
        oldAddress: '123 Fake St',
        newAddress: '456 Real St.',
        smoveDate: "Jan 1, 2000",
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

export default exampleData;