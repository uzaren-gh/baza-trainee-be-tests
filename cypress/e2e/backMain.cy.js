const signData = {
  name: "juniorAQA",
  email: "testmail1@ukr.net",
  password: "testpassword",
  id: "",
  token: "",
};

const contacts = {
  contacts: {
    contactsDataList: {
      phone1: 38067322223,
      phone2: 56792161779,
      email: "t1000@sky.net",
    },
    socialsMediaList: {
      linkedin: "www.skay.netu",
      facebook: "www.facebook.usa",
    },
  },
};

const partnerData = {
  name: "John Smith 1",
  homeUrl: "www.google.com",
  imageUrl: "www.google.com/img",
  id: "",
};

const role = {
  name: "Automator QA",
  id: "",
};

const member = {
  name: "Serjant Petrenko",
  profileUrl: "www.bazatrainee.comm",
  id: "",
};

const project = {
  title: "Baza Trainee (beta)",
  creationDate: 1669872000000,
  launchDate: 1669872000000,
  imageUrl: "www.google.com/img/example",
  description: "Is the work after courses?",
  complexity: 1,
  teamMembers: [{ userId: "", roleId: "" }],
  status: "reserv",
  id: "",
};

const testimonial = {
  name: "Ilon Mask First :-)",
  review: "Хорошая штука эта база",
  date: 1669872000000,
  imageUrl: "www.ukr.net",
  id: "",
};

describe("User (admin) section tests", () => {
  // it("User registration happy path (code 201 expected)", () => {
  //   const prequest = {
  //     url: "https://baza-trainee-7ain.onrender.com/auth/register",
  //     method: "POST",
  //     body: {
  //       email: `${signData.email}`,
  //       password: `${signData.password}`,
  //       name: `${signData.name}`,
  //     },
  //     failOnStatusCode: false,
  //   };

  //   cy.request(prequest).then((response) => {
  //     const status = response.status;
  //     console.log(response.body);
  //     assert.equal(201, status);
  //   });
  // });

  it("Happy Path. User Login (code 200 expected)", () => {
    const request = {
      url: "https://baza-trainee-7ain.onrender.com/auth/login",
      method: "POST",
      body: {
        email: `${signData.email}`,
        password: `${signData.password}`,
        // name: "John Smith 1",
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      // console.log(response.body);
      signData.id = response.body._id;
      signData.token = response.body.token;
      assert.equal(200, status);
    });
  });

  it("Happy Path. Get User Info. (code 200 expected)", () => {
    const prequest = {
      url: "https://baza-trainee-7ain.onrender.com/auth/user",
      method: "GET",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      failOnStatusCode: false,
    };

    cy.request(prequest).then((response) => {
      const status = response.status;
      // console.log(response.body);
      assert.equal(200, status);
    });
  });
});

describe("Contacts section tests", () => {
  it("Happy Path. Get contact Info. (code 200 expected)", () => {
    const prequest = {
      url: "https://baza-trainee-7ain.onrender.com/contacts",
      method: "GET",
      //  headers: {
      //    Authorization: `Bearer ${signData.token}`,
      //  },
      failOnStatusCode: false,
    };

    cy.request(prequest).then((response) => {
      const status = response.status;
      console.log(response.body);
      assert.equal(200, status);
    });
  });

  it("Happy path. Patching the existing partner. Code 200 expected", () => {
    const request = {
      url: `https://baza-trainee-7ain.onrender.com/contacts`,
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      body: {
        contacts: {
          contactsDataList: {
            phone1: 380673222233,
            phone2: 380921617790,
            email: "t1000@sky.net",
          },
          socialsMediaList: {
            linkedin: "www.skay.netu",
            facebook: "www.facebook.usa",
          },
        },
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      console.log(response.body);
      assert.equal(200, status);
    });
  });
});

describe("Partners section tests", () => {
  it("Happy Path. Get all partners. (code 200 expected)", () => {
    const request = {
      url: "https://baza-trainee-7ain.onrender.com/partners",
      method: "GET",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      // console.log(response.body);
      assert.equal(200, status);
    });
  });

  it("Happy path. Creating new partner.Code 200 expected", () => {
    const request = {
      url: "https://baza-trainee-7ain.onrender.com/partners",
      method: "POST",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      body: {
        name: `${partnerData.name}`,
        homeUrl: `${partnerData.homeUrl}`,
        imageUrl: `${partnerData.imageUrl}`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      // console.log(response.body);
      partnerData.id = response.body._id;
      // console.log("ID:", partnerData.id);
      console.log("token:", signData.token);
      assert.equal(200, status);
    });
  });

  it("Happy path. Get the created partner by id. Code 200 expected", () => {
    // console.log("ВОТ ОНО:", partnerData.id);
    const request = {
      url: `https://baza-trainee-7ain.onrender.com/partners/${partnerData.id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      // console.log(response.body);
      assert.equal(200, status);
    });
  });

  it("Happy path. Patching the existing partner. Code 200 expected", () => {
    // console.log("ВОТ ОНО:", partnerData.id);
    const request = {
      url: `https://baza-trainee-7ain.onrender.com/partners/${partnerData.id}`,
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      body: {
        name: `${partnerData.name} Petrushka`,
        homeUrl: "www.google.cam",
        imageUrl: "www.google.com/img/cartoon",
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      // console.log(response.body);
      assert.equal(200, status);
    });
  });

  it("Wrong Path. Attempt to Re-Create of the existed partner. Code 404 expected", () => {
    const request = {
      url: `https://baza-trainee-7ain.onrender.com/partners/${partnerData.id}`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      body: {
        name: `${partnerData.name} Recreating??? `,
        homeUrl: `${partnerData.homeUrl}`,
        imageUrl: `${partnerData.imageUrl}`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      // console.log(response.body);
      assert.equal(404, status);
      assert;
    });
  });

  it("Happy Path. Delete the existed partner. (Code 200 expected)", () => {
    const request = {
      url: `https://baza-trainee-7ain.onrender.com/partners/${partnerData.id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      // console.log(response.body);
      assert.equal(200, status);
      assert;
    });
  });
});

describe("ROLEs section tests", () => {
  it("Happy Path. Get all roles. (code 200 expected)", () => {
    const request = {
      url: "https://baza-trainee-7ain.onrender.com/roles",
      method: "GET",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      // console.log(response.body);
      assert.equal(200, status);
    });
  });

  it("Happy Path. Create new role. (code 200 expected)", () => {
    const request = {
      url: "https://baza-trainee-7ain.onrender.com/roles",
      method: "POST",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      body: {
        name: "Automator QA",
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      // console.log(response.body);
      role.id = response.body._id;
      assert.equal(200, status);
    });
  });

  it("Happy Path. Get role by id. (code 200 expected)", () => {
    // role.id = "647b856cd88b813354dc010f";
    const request = {
      url: `https://baza-trainee-7ain.onrender.com/roles/${role.id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      body: {
        name: "Automator QA",
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      // console.log(response.body);
      assert.equal(200, status);
    });
  });

  it("Happy Path. PATCH the existing role. (code 200 expected)", () => {
    const request = {
      url: `https://baza-trainee-7ain.onrender.com/roles/${role.id}`,
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      body: {
        name: "Automator QA or AQA",
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      // console.log(response.body);
      assert.equal(200, status);
    });
  });
});

describe("Team Members section tests", () => {
  it("Happy Path. Get all members. (code 200 expected)", () => {
    const request = {
      url: "https://baza-trainee-7ain.onrender.com/members",
      method: "GET",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      // console.log(response.body);
      assert.equal(200, status);
    });
  });

  it("Happy Path. Create new team member. (code 200 expected)", () => {
    const request = {
      url: "https://baza-trainee-7ain.onrender.com/members",
      method: "POST",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      body: {
        name: `${member.name}`,
        profileUrl: `${member.profileUrl}`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      // console.log(response.body);
      member.id = response.body._id;
      assert.equal(200, status);
    });
  });

  it("Happy Path. Get a team member by id. (code 200 expected)", () => {
    const request = {
      url: `https://baza-trainee-7ain.onrender.com/members/${member.id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      // console.log(response.body);
      assert.equal(200, status);
    });
  });

  it("Happy Path. CHANGE the existing team member. (code 200 expected)", () => {
    const request = {
      url: `https://baza-trainee-7ain.onrender.com/members/${member.id}`,
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      body: {
        name: `${member.name}new1`,
        profileUrl: `${member.profileUrl}/junior`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      // console.log(response.body);
      assert.equal(200, status);
    });
  });
});

describe("PROJECT's section tests", () => {
  it("Happy Path. Register new PROJECT. (code 201 expected)", () => {
    const request = {
      url: "https://baza-trainee-7ain.onrender.com/projects",
      method: "POST",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },

      body: {
        title: `${project.title}`,
        creationDate: project.creationDate,
        launchDate: project.launchDate,
        imageUrl: `${project.imageUrl}`,
        description: `${project.description}`,
        complexity: project.complexity,
        teamMembers: [{ userId: `${member.id}`, roleId: `${role.id}` }],
        status: `${project.status}`,
      },

      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      console.log(response.body);
      project.id = response.body._id;
      assert.equal(200, status);
    });
  });

  it("Happy Path. Get all PROJECTS. (code 200 expected)", () => {
    const request = {
      url: "https://baza-trainee-7ain.onrender.com/projects",
      method: "GET",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      console.log(response.body);
      assert.equal(200, status);
    });
  });

  it("Happy Path. Get created PROJECT by id. (code 200 expected)", () => {
    const request = {
      url: `https://baza-trainee-7ain.onrender.com/projects/${project.id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      console.log(response.body);
      assert.equal(200, status);
    });
  });

  it("Happy Path. CHANGE the created PROJECT. (code 200 expected)", () => {
    const request = {
      url: `https://baza-trainee-7ain.onrender.com/projects/${project.id}`,
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },

      body: {
        title: `${project.title} and something PATCH`,
        imageUrl: `${project.imageUrl}/newpath`,
        description: `${project.description} И шо?`,
        complexity: project.complexity + 1,
        teamMembers: [{ userId: `${member.id}`, roleId: `${role.id}` }],
        status: `active`,
        creationDate: 166987200001,
        launchDate: 166987200001,
      },

      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      console.log(response.body);
      assert.equal(200, status);
    });
  });

  //Удаление созданного тестового проекта
  it("Happy Path. Delete the new PROJECT. (code 200 expected)", () => {
    const request = {
      url: `https://baza-trainee-7ain.onrender.com/projects/${project.id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      console.log(response.body);
      assert.equal(200, status);
    });
  });

  //Удаление ранее созданной тестовой роли по ID
  it("Happy Path. Delete role by id. (code 200 expected)", () => {
    const request = {
      url: `https://baza-trainee-7ain.onrender.com/roles/${role.id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      body: {
        name: "Automator QA",
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      // console.log(response.body);
      assert.equal(200, status);
    });
  });

  //Удаление ранее созданного члена команды по ID
  it("Happy Path. DELETE the created team member by id. (code 200 expected)", () => {
    const request = {
      url: `https://baza-trainee-7ain.onrender.com/members/${member.id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      // console.log(response.body);
      assert.equal(200, status);
    });
  });
});

describe("Testimonials section tests", () => {
  it("Happy Path. Get all testimonials. (code 200 expected)", () => {
    const request = {
      url: "https://baza-trainee-7ain.onrender.com/testimonials",
      method: "GET",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      console.log(response.body);
      assert.equal(200, status);
    });
  });

  it("Happy path. Creating new testimonial. Code 200 expected", () => {
    const request = {
      url: "https://baza-trainee-7ain.onrender.com/testimonials",
      method: "POST",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      body: {
        name: `${testimonial.name}`,
        review: `${testimonial.review}`,
        date: `${testimonial.date}`,
        imageUrl: `${testimonial.imageUrl}`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      console.log(response.body);
      testimonial.id = response.body._id;
      assert.equal(200, status);
    });
  });

  it("Happy path. Get the created testimonial by id. Code 200 expected", () => {
    const request = {
      url: `https://baza-trainee-7ain.onrender.com/testimonials/${testimonial.id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      console.log(response.body);
      assert.equal(200, status);
    });
  });

  it("Happy path. Patching the existing testimonial. Code 200 expected", () => {
    // console.log("ВОТ ОНО:", partnerData.id);
    const request = {
      url: `https://baza-trainee-7ain.onrender.com/testimonials/${testimonial.id}`,
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      body: {
        name: `${testimonial.name}11111111`,
        review: `${testimonial.review}2222222`,
        date: `${testimonial.date}333333333`,
        imageUrl: `${testimonial.imageUrl}/444444444`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      console.log(response.body);
      assert.equal(200, status);
    });
  });

  it("Happy Path. Delete the existed testimonial. (Code 200 expected)", () => {
    const request = {
      url: `https://baza-trainee-7ain.onrender.com/testimonials/${testimonial.id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${signData.token}`,
      },
      failOnStatusCode: false,
    };
    cy.request(request).then((response) => {
      const status = response.status;
      console.log(response.body);
      assert.equal(200, status);
    });
  });
});
