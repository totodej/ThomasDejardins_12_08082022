class mainDataModel {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.age = data.userInfos.age;
    this.todayScore = data.todayScore || data.score;
    this.calories = data.keyData.calorieCount;
    this.protein = data.keyData.proteinCount;
    this.carbohydrate = data.keyData.carbohydrateCount;
    this.lipid = data.keyData.lipidCount;
  }
}

class activityDataModel {
  constructor(data) {
    this.id = data.userId;
    this.sessions = data.sessions;
  }
}

class averageSessionsDataModel {
  constructor(data) {
    this.id = data.userId;
    this.sessions = data.sessions;
  }
}

class performanceDataModel {
  constructor(data) {
    this.data = data.data;
    this.kind = data.kind;
  }
}

export {
  mainDataModel,
  activityDataModel,
  averageSessionsDataModel,
  performanceDataModel,
};
