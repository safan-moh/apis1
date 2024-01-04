const capacityBusinessDebt = [
    {
        profileID : "2cad7c32-9d76-11ee-8c90-0242ac120002",
        debt_service_coverage_ratio : {
            ytd : "1.56:1",
            proposed : "0.5:1",
            trend : 5,
            history : [{
                year : 2023,
                ratio : "1.56:1"
            },{
                year : 2022,
                ratio : "1.48:1"
            },{
                year : 2021,
                ratio : "1.41:1"
            }],
            current_debt : {
                approved_total : 1000000,
                balance_total : 528668,
                payment_total : 14458,
                secured_parties : 4
            }
        }
    },
    {
        profileID : "2cad7c32-9d76-11ee-8c90-0242ac120003",
        debt_service_coverage_ratio : {
            ytd : "1.56:12",
            proposed : "0.5:1",
            trend : 5,
            history : [{
                year : 2023,
                ratio : "1.56:1"
            },{
                year : 2022,
                ratio : "1.48:1"
            },{
                year : 2021,
                ratio : "1.41:1"
            }],
            current_debt : {
                approved_total : 1000000,
                balance_total : 528668,
                payment_total : 14458,
                secured_parties : 4
            }
        }
    },{
        profileID : "2cad7c32-9d76-11ee-8c90-0242ac120004",
        debt_service_coverage_ratio : {
            ytd : "1.56:1",
            proposed : "0.5:1",
            trend : 5,
            history : [{
                year : 2023,
                ratio : "1.56:1"
            },{
                year : 2022,
                ratio : "1.48:1"
            },{
                year : 2021,
                ratio : "1.41:1"
            }],
            current_debt : {
                approved_total : 1000000,
                balance_total : 528668,
                payment_total : 14458,
                secured_parties : 4
            }
        }
    }
];
const moreBusinessDetails = [{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120002",
    LoanType : "Equipment",
    Approved : 100000,
    Balance : 20000,
    Payment : "10000 Month",
    Inception_Date : "2020 June",
    Maturity_Date : "2025 June",
    Loan_Term : "48 Months",
    Debt_Type : "Debt Type"
},{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120003",
    LoanType : "Real Estate",
    Approved : 100000,
    Balance : 20000,
    Payment : "10000 Daily",
    Inception_Date : "2020 June",
    Maturity_Date : "2025 June",
    Loan_Term : "48 Months",
    Debt_Type : "Debt Type"
},{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120004",
    LoanType : "Equipment",
    Approved : 100000,
    Balance : 20000,
    Payment : "10000 By weekly",
    Inception_Date : "2020 June",
    Maturity_Date : "2025 June",
    Loan_Term : "48 Months",
    Debt_Type : "Debt Type"
}];

 
const capacityPersonalDebt = [
    {
        profileID : "2cad7c32-9d76-11ee-8c90-0242ac120002",
        debt_to_income_ratio : {
            ytd : "40%",
            proposed : "50%",
            trend : 5,
            history : [{
                year : 2023,
                ratio : "26%"
            },{
                year : 2022,
                ratio : "53%"
            },{
                year : 2021,
                ratio : "15%"
            }],
            current_debt : {
                approved_total : 1000000,
                balance_total : 195000,
                payment_total : 20000,
                secured_parties : 4
            }
        }
    },
    {
        profileID : "2cad7c32-9d76-11ee-8c90-0242ac120003",
        debt_to_income_ratio : {
            ytd : "40%",
            proposed : "50%",
            trend : 5,
            history : [{
                year : 2023,
                ratio : "26%"
            },{
                year : 2022,
                ratio : "53%"
            },{
                year : 2021,
                ratio : "15%"
            }],
            current_debt : {
                approved_total : 1000000,
                balance_total : 195000,
                payment_total : 20000,
                secured_parties : 4
            }
        }
    },
    {
        profileID : "2cad7c32-9d76-11ee-8c90-0242ac120004",
        debt_to_income_ratio : {
            ytd : "40%",
            proposed : "50%",
            trend : 5,
            history : [{
                year : 2023,
                ratio : "26%"
            },{
                year : 2022,
                ratio : "53%"
            },{
                year : 2021,
                ratio : "15%"
            }],
            current_debt : {
                approved_total : 1000000,
                balance_total : 195000,
                payment_total : 20000,
                secured_parties : 4
            }
        }
    },
   
];


const morePersonalDetails = [{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120002",
    LoanType : "Equipment",
    Approved : 100000,
    Balance : 20000,
    Payment : "10000 Month",
    Inception_Date : "2020 June",
    Maturity_Date : "2025 June",
    Loan_Term : "48 Months",
    Debt_Type : "Debt Type"
},{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120003",
    LoanType : "Real Estate",
    Approved : 100000,
    Balance : 20000,
    Payment : "10000 Daily",
    Inception_Date : "2020 June",
    Maturity_Date : "2025 June",
    Loan_Term : "48 Months",
    Debt_Type : "Debt Type"
},{
    profileID : "2cad7c32-9d76-11ee-8c90-0242ac120004",
    LoanType : "Equipment",
    Approved : 100000,
    Balance : 20000,
    Payment : "10000 By weekly",
    Inception_Date : "2020 June",
    Maturity_Date : "2025 June",
    Loan_Term : "48 Months",
    Debt_Type : "Debt Type"
}];



function getBusinessDebtDetails(profileID) {
    const businessDebt = capacityBusinessDebt.find(item => item.profileID === profileID);

    if (businessDebt) {
        const businessDetails = moreBusinessDetails.find(item => item.profileID === profileID);

        return {
            business_debt: businessDebt,
            additional_details: businessDetails,
        };
    }

    return null;
}

function getBusinessCashflowDetails(profileID) {
    const cashflow = businessCashflow.find(item => item.profileID === profileID);

    if (cashflow) {
        return { business_cashflow: cashflow };
    }

    return null;
}

function getPersonalDebtDetails(profileID) {
    const personalDebt = capacityPersonalDebt.find(item => item.profileID === profileID);

    if (personalDebt) {
        const personalDetails = morePersonalDetails.find(item => item.profileID === profileID);

        return {
            personal_debt: personalDebt,
            additional_details: personalDetails,
        };
    }

    return null;
}

module.exports = { getBusinessDebtDetails, getBusinessCashflowDetails, getPersonalDebtDetails };