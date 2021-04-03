const exampleData = {
  someUserEmail: {
    fullname: "grabbed from google auth",
    address: "user input upon sign up",
    zipcode: "user input upon sign up",
    accessRole: "admin or viewOnly",
    onMoveTeamOf: ["smooveId", "smooveId"], // these are the smooveIds that they're just a contributor to, so we can validate they have access
    smoves: {
      1: {  // the 1 is a smooveId
        smooveName: "someName",
        tasks: [
          {
            taskId: 1,
            category: "moving, packing, services, etc",
            companies: [
              {
                companyName: "Great company",
                url: "www.greatcompany.com"
              },
              {
                companyName: "Great company",
                url: "www.greatcompany.com"
              },
              {
                companyName: "Great company",
                url: "www.greatcompany.com"
              },
            ],
            assignedTo: ["someUserEmail1", "someUserEmail2"],
            status: "not started, in progress, complete",
            dueDate: "date"
          },
          {
            taskId: 2,
            category: "moving, packing, services, etc",
            companies: [
              {
                companyName: "Great company",
                url: "www.greatcompany.com"
              },
              {
                companyName: "Great company",
                url: "www.greatcompany.com"
              },
              {
                companyName: "Great company",
                url: "www.greatcompany.com"
              },
            ],
            assignedTo: ["someUserEmail1", "someUserEmail2"],
            status: "not started, in progress, complete",
            dueDate: "date",
          },
          {
            taskId: 3,
            category: "moving, packing, services, etc",
            companies: [
              {
                companyName: "Great company",
                url: "www.greatcompany.com"
              },
              {
                companyName: "Great company",
                url: "www.greatcompany.com"
              },
              {
                companyName: "Great company",
                url: "www.greatcompany.com"
              },
            ],
            assignedTo: ["someUserEmail1", "someUserEmail2"],
            status: "not started, in progress, complete",
            dueDate: "date"
          },
        ],
        inventory: [
          {
            boxId: 1,
            boxName: "gadgets",
            roomId: 1,
            roomName: "kitchen",
            flags: ["fragile", "valuable", "none"],
            notes: "this box has some random stuff from the kitchen"
          },
          {
            boxId: 2,
            boxName: "plates",
            roomId: 1,
            roomName: "kitchen",
            flags: ["fragile", "valuable", "none"],
            notes: "this box has some fragile ceramics from the kitchen"
          }
        ],
        moveTeam: ["someUserEmail1", "someUserEmail2", "someUserEmail3"] // we don't need to store more than the username because we can query the username itself to get more details
      },
      2: {
        smooveName: "someName",
        tasks: [
          {
            taskId: 1,
            category: "moving, packing, services, etc",
            companies: [
              {
                companyName: "Great company",
                url: "www.greatcompany.com"
              },
              {
                companyName: "Great company",
                url: "www.greatcompany.com"
              },
              {
                companyName: "Great company",
                url: "www.greatcompany.com"
              },
            ],
            assignedTo: ["someUserEmail1", "someUserEmail2"],
            status: "not started, in progress, complete",
            dueDate: "date"
          },
          {
            taskId: 2,
            category: "moving, packing, services, etc",
            companies: [
              {
                companyName: "Great company",
                url: "www.greatcompany.com"
              },
              {
                companyName: "Great company",
                url: "www.greatcompany.com"
              },
              {
                companyName: "Great company",
                url: "www.greatcompany.com"
              },
            ],
            assignedTo: ["someUserEmail1", "someUserEmail2"],
            status: "not started, in progress, complete",
            dueDate: "date",
          },
          {
            taskId: 3,
            category: "moving, packing, services, etc",
            companies: [
              {
                companyName: "Great company",
                url: "www.greatcompany.com"
              },
              {
                companyName: "Great company",
                url: "www.greatcompany.com"
              },
              {
                companyName: "Great company",
                url: "www.greatcompany.com"
              },
            ],
            assignedTo: ["someUserEmail1", "someUserEmail2"],
            status: "not started, in progress, complete",
            dueDate: "date"
          },
        ],
        inventory: [
          {
            boxId: 1,
            boxName: "gadgets",
            roomId: 1,
            roomName: "kitchen",
            flags: ["fragile", "valuable", "none"],
            notes: "this box has some random stuff from the kitchen"
          },
          {
            boxId: 2,
            boxName: "plates",
            roomId: 1,
            roomName: "kitchen",
            flags: ["fragile", "valuable", "none"],
            notes: "this box has some fragile ceramics from the kitchen"
          }
        ],
        moveTeam: ["someUserEmail1", "someUserEmail2", "someUserEmail3"]
      },
    }
  }
}