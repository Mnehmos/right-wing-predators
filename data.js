/**
 * Misconduct Database
 *
 * This file contains the dataset of publicly-documented cases.
 * Each entry follows this structure:
 *
 * {
 *   id: number,
 *   name: string,
 *   position: string[],
 *   crime: string[],
 *   description: string,
 *   sources: string[],
 *   tags: string[],
 *   year: number | null
 * }
 *
 * Replace the sample data below with your actual dataset.
 */

const DATA = [
    {
        id: 1,
        name: "Sample Entry One",
        position: ["State Representative", "Political Activist"],
        crime: ["Sexual Assault", "Harassment"],
        description: "Documented case of misconduct with multiple corroborating sources. This is a factual description based on publicly available court documents and news reports.",
        sources: [
            "https://example.com/source1",
            "https://example.com/source2"
        ],
        tags: ["GOP", "Convicted", "Prison Sentence"],
        year: 2018
    },
    {
        id: 2,
        name: "Sample Entry Two",
        position: ["Pastor", "Religious Leader"],
        crime: ["Child Abuse", "Sexual Misconduct"],
        description: "Case involving abuse of authority within religious institution. Multiple victims came forward with allegations that were substantiated through investigation.",
        sources: [
            "https://example.com/source3",
            "https://example.com/source4",
            "https://example.com/source5"
        ],
        tags: ["Clergy", "Multiple Victims", "Settlement"],
        year: 2015
    },
    {
        id: 3,
        name: "Sample Entry Three",
        position: ["County Commissioner"],
        crime: ["Sexual Harassment"],
        description: "Workplace sexual harassment case resulting in resignation and legal settlement. Documented through official complaint records.",
        sources: [
            "https://example.com/source6"
        ],
        tags: ["Resigned", "Settlement"],
        year: 2020
    },
    {
        id: 4,
        name: "Sample Entry Four",
        position: ["Congressional Aide", "Campaign Manager"],
        crime: ["Inappropriate Conduct", "Assault"],
        description: "Multiple complaints filed regarding inappropriate behavior during political campaign. Case documented in campaign finance violation investigations.",
        sources: [
            "https://example.com/source7",
            "https://example.com/source8"
        ],
        tags: ["Campaign Staff", "Multiple Complaints"],
        year: 2016
    },
    {
        id: 5,
        name: "Sample Entry Five",
        position: ["Radio Host", "Political Commentator"],
        crime: ["Sexual Harassment"],
        description: "High-profile media figure accused by multiple colleagues of workplace harassment. Led to termination and public statements from broadcasting network.",
        sources: [
            "https://example.com/source9",
            "https://example.com/source10"
        ],
        tags: ["Media", "Terminated", "Multiple Accusers"],
        year: 2017
    },
    {
        id: 6,
        name: "Sample Entry Six",
        position: ["Mayor"],
        crime: ["Sexual Assault", "Abuse of Power"],
        description: "Allegations of sexual assault while in office, coupled with abuse of mayoral authority. Led to recall effort and criminal investigation.",
        sources: [
            "https://example.com/source11",
            "https://example.com/source12",
            "https://example.com/source13"
        ],
        tags: ["Elected Official", "Recall", "Under Investigation"],
        year: 2019
    },
    {
        id: 7,
        name: "Sample Entry Seven",
        position: ["State Senator"],
        crime: ["Solicitation", "Inappropriate Conduct"],
        description: "Arrested for solicitation of sex worker in public park. Documented through police arrest records and court proceedings.",
        sources: [
            "https://example.com/source14"
        ],
        tags: ["Arrest", "Court Records", "Resigned"],
        year: 2014
    },
    {
        id: 8,
        name: "Sample Entry Eight",
        position: ["Megachurch Pastor", "Board Member"],
        crime: ["Sexual Misconduct", "Financial Fraud"],
        description: "Leader of prominent megachurch involved in sexual misconduct scandal while simultaneously embezzling church funds. Multiple civil and criminal proceedings.",
        sources: [
            "https://example.com/source15",
            "https://example.com/source16"
        ],
        tags: ["Clergy", "Financial Crimes", "Civil Lawsuit"],
        year: 2021
    },
    {
        id: 9,
        name: "Sample Entry Nine",
        position: ["County Sheriff"],
        crime: ["Sexual Assault", "Misconduct in Office"],
        description: "Law enforcement official accused of sexual assault of detainee. Federal investigation into civil rights violations.",
        sources: [
            "https://example.com/source17",
            "https://example.com/source18",
            "https://example.com/source19"
        ],
        tags: ["Law Enforcement", "Federal Investigation", "Civil Rights"],
        year: 2022
    },
    {
        id: 10,
        name: "Sample Entry Ten",
        position: ["Congressional Candidate"],
        crime: ["Child Pornography"],
        description: "Campaign suspended following arrest on child pornography charges. Federal prosecution resulted in conviction.",
        sources: [
            "https://example.com/source20",
            "https://example.com/source21"
        ],
        tags: ["Federal Crime", "Convicted", "Prison Sentence"],
        year: 2019
    },
    {
        id: 11,
        name: "Sample Entry Eleven",
        position: ["Judge"],
        crime: ["Sexual Harassment", "Judicial Misconduct"],
        description: "Sitting judge removed from bench following sustained allegations of sexual harassment of court staff and attorneys.",
        sources: [
            "https://example.com/source22"
        ],
        tags: ["Judiciary", "Removed from Office", "Ethics Violation"],
        year: 2016
    },
    {
        id: 12,
        name: "Sample Entry Twelve",
        position: ["Political Consultant"],
        crime: ["Stalking", "Harassment"],
        description: "Restraining orders filed by multiple women citing threatening behavior and stalking. Documented through court protective orders.",
        sources: [
            "https://example.com/source23",
            "https://example.com/source24"
        ],
        tags: ["Restraining Order", "Multiple Victims", "Court Records"],
        year: 2020
    },
    {
        id: 13,
        name: "Sample Entry Thirteen",
        position: ["Lieutenant Governor"],
        crime: ["Sexual Assault"],
        description: "Allegations of sexual assault dating back to college years. Multiple corroborating witnesses. Led to calls for resignation.",
        sources: [
            "https://example.com/source25",
            "https://example.com/source26"
        ],
        tags: ["Statewide Official", "Historical Allegation", "Ongoing"],
        year: null
    },
    {
        id: 14,
        name: "Sample Entry Fourteen",
        position: ["Think Tank Director", "Policy Advisor"],
        crime: ["Sexual Harassment"],
        description: "Pattern of sexual harassment within conservative think tank. Internal investigation led to termination and organizational reforms.",
        sources: [
            "https://example.com/source27"
        ],
        tags: ["Policy Circles", "Terminated", "Internal Investigation"],
        year: 2018
    },
    {
        id: 15,
        name: "Sample Entry Fifteen",
        position: ["Bishop"],
        crime: ["Child Abuse", "Cover-up"],
        description: "Church leader implicated in both abuse and systematic cover-up of abuse by clergy under his authority. Subject of grand jury report.",
        sources: [
            "https://example.com/source28",
            "https://example.com/source29",
            "https://example.com/source30"
        ],
        tags: ["Clergy", "Institutional Cover-up", "Grand Jury", "Multiple Victims"],
        year: 2017
    }
];

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
}
