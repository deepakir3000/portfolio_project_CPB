class Urls {
    // Base URLs
    static API_BASE_URL = `http://62.72.31.234:2020/jalamanak/`;
    static IMAGE_BASE_URL = `http://62.72.31.234:9000/wqacodisha/`;
    static IMAGE_URL_MASTER = `${this.IMAGE_BASE_URL}/master/`;

    //#ImageURL
    static APPLOGO = `${this.IMAGE_URL_MASTER}logo/wqac_logo.png`



    //#UserUrls
    static LOGIN = `${this.API_BASE_URL}loginUser`;
    // static GET_ALL_USER = `${this.API_BASE_URL}getAllUsersDetails`;
    // static TOGGLE_USER_STATUS = `${this.API_BASE_URL}toggleActiveUser/`;
    // static UPDATE_USER = `${this.API_BASE_URL}updateUser/`;
    // static DELETE_USER = `${this.API_BASE_URL}deleteUser/`;

    // USER
    // static CREATE_USERLABDETAILS = `${this.API_BASE_URL}createUserDetails`;
    static CREATE_LABDETAILS = `${this.API_BASE_URL}createUserDetails`;
    static CREATE_SECTIONOFFICER = `${this.API_BASE_URL}createUserDetails`;
    static CREATE_AM = `${this.API_BASE_URL}createUserDetails`;
    static CREATE_JALASATHI = `${this.API_BASE_URL}createUserDetails`;
    //ADMIN
    static CREATE_ADMIN = `${this.API_BASE_URL}createUserDetails`;
    //SECTIONOFFICER
    static GET_JALASATHI_DATA = `${this.API_BASE_URL}getAllJalasathiBySectionOfficer`;

    static GET_TEST_REPORT_DETAILS = `${this.API_BASE_URL}getTestReportDetailsListOfSectionOfficer`;

    static GET_TEST_REPORT_DETAILS = `${this.API_BASE_URL}getTestReportHistoryOfSectionOfficer`;


    //Lab Report
    static GETALLBYID_LABREPORT = `${this.API_BASE_URL}getSecttionOfficersDetailsByLab`;
    static GETALL_TESTREPORT = `${this.API_BASE_URL}getTestReportById`;
    static GETESCALATEDTESTREPORTBYID_LABREPORT = `${this.API_BASE_URL}getEscalatedTestReportBySectionofficeerId`;
    static UPDATE_CLOSETICKETTESTREPORT = `${this.API_BASE_URL}closeTicketStatusOfTestReportDetailsOfSectionOfficer/`;
    static GETALL_AM_DETAILS = `${this.API_BASE_URL}getAllAmDetailsbyLab`;
    static UPDATE_ESCALATESTATUS = `${this.API_BASE_URL}escalateStatusOfTestReportDetailsOfLab/`;  
    static GETALL_ESCALATEREPORTBYAMID = `${this.API_BASE_URL}getAllEscalterTestReportByAmId?amId=`;  
    static GETALLSAMPLEBYID_LABREPORT = `${this.API_BASE_URL}getHistoryByLabid`;

    //AM Test Report
    static GET_TEST_REPORT_DETAILS_AM = `${this.API_BASE_URL}getEscalatedTestReportByAmId?userId=`;
    static GET_TEST_REPORT = `${this.API_BASE_URL}getTestReportById/`;

    //AM Test History
    static GET_TEST_HISTORY_DETAILS_AM = `${this.API_BASE_URL}getAllHistoryByAmId`;

    //Notification
    static GET_ALL_NOTIFICATION = `${this.API_BASE_URL}getAllNotificationsByNotificationTo/`;
    static DELETE_NOTIFICATION = `${this.API_BASE_URL}deleteNotification/`;
    static CLEAR_ALL_NOTIFICATION = `${this.API_BASE_URL}clearAllNotificationsByNotificationTo/`;
    static SHORTED_UPDATED_LAB = `${this.API_BASE_URL}shortedUpdatedToLab/
`;

    //Sectionofficier
    static GET_JALASATHI_DATA = `${this.API_BASE_URL}getAllJalasathiBySectionOfficer`;
    static GET_TEST_REPORT_DETAILS = `${this.API_BASE_URL}getTestReportDetailsListOfSectionOfficer/`;
    static GET_TEST_REPORT_HISTORY_DETAILS = `${this.API_BASE_URL}getTestReportHistoryOfSectionOfficer/`;
    static GET_TEST_REPORT = `${this.API_BASE_URL}getTestReportById`;
    static UPDATE_TEST_REPORT = `${this.API_BASE_URL}updateTestReportDetailsBySectionOfficer`;
    static UPDATE_CLOSETICKETTESTREPORT = `${this.API_BASE_URL}closeTicketStatusOfTestReportDetailsOfSectionOfficer`;
    static ESCALATE_TICKET = `${this.API_BASE_URL}escalateStatusOfTestReportDetailsOfSectionOfficer`;


    //UserSuperAdmin
    static GET_ALL_LAB = `${this.API_BASE_URL}getAllLabDetails`;
    static GET_ALL_ADMIN = `${this.API_BASE_URL}getAllAdminDetails`;
    static GET_ALL_SECTION_OFFICER = `${this.API_BASE_URL}getAllSectionOfficerDetails`;
    static GET_ALL_AM = `${this.API_BASE_URL}getAllAmDetails`;
    static GET_ALL_JALASATHI = `${this.API_BASE_URL}getAllJalasathiDetails`;

    static CREATE_ADMIN = `${this.API_BASE_URL}createUserDetails`;
    static CREATE_LAB = `${this.API_BASE_URL}createUserDetails`;
    static CREATE_SECTION_OFFICER = `${this.API_BASE_URL}createUserDetails`;
    static CREATE_JALASATHI = `${this.API_BASE_URL}createUserDetails`;
    static CREATE_AM = `${this.API_BASE_URL}createUserDetails`;

    static UPDATE_ADMIN = `${this.API_BASE_URL}updateUserDetails/`;
    static UPDATE_AM = `${this.API_BASE_URL}updateUserDetails/`;
    static UPDATE_JALASATHI = `${this.API_BASE_URL}updateUserDetails/`;
    static UPDATE_SECTION_OFFICER = `${this.API_BASE_URL}updateUserDetails/`;
    static UPDATE_LAB = `${this.API_BASE_URL}updateUserDetails/`;

    //getByUserDetails
    static GET_USER_DETAILS_BY_ID = `${this.API_BASE_URL}getUserDetailsById/`;

    //deleteUser
    static DELETE_USER = `${this.API_BASE_URL}deleteUserDetails/`;

    //TOGGLE
    static TOGGLE_STATUS_USER = `${this.API_BASE_URL}toggleActiveUser/`;

     //LAB DROP DOWN
    static GET_ALL_LAB_DROPDOWN = `${this.API_BASE_URL}getAllLabDetailsDropDown`;

    //SECTION OFFICER DROPDOWN
    static GET_ALL_SECTION_OFFICER_DROPDOWN = `${this.API_BASE_URL}getAllSectionOfficerDetailsDropDown`;
}

export default Urls;

