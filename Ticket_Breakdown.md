# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here


Assuming that we want to give agents a custom ids which will be unique. We can do ticket management as below - 
Ticket 1: Add Custom ID Field to Agents Table

Description:
Add a new field named "custom_id" to the Agents table in the database. This field will allow Facilities to save their own custom IDs for each Agent they work with.

Acceptance Criteria:

The "custom_id" field is added to the Agents table.
The field is unique and can be used to uniquely identify each Agent.
The API endpoints and database queries are updated to handle the new "custom_id" field.
Estimate:

Development: 4 hours
Testing: 1 hours
Ticket 2: Update Facility-Agent Relationship

Description:
Update the Facility-Agent relationship to use the new "custom_id" field instead of the internal database ID.

Acceptance Criteria:

The relationship between Facilities and Agents is updated to use the "custom_id" field.
The "getShiftsByFacility" function is modified to accept custom IDs and fetch the corresponding Shifts.
Estimate:

Development: 3 hours
Testing: 1 hour
Ticket 3: Update Report Generation

Description:
Modify the report generation process to include the custom IDs of each Agent on the generated reports.

Acceptance Criteria:

The "generateReport" function is updated to fetch and display the custom IDs of Agents on the report.
The custom IDs are correctly associated with the corresponding Agents for the given Shifts.
Estimate:

Development: 3 hours
Testing: 1 hour
Ticket 4: Add Facility Interface for Custom ID Management

Description:
Create a new user interface in the Facility dashboard for Facilities to manage custom IDs for Agents.

Acceptance Criteria:

A new page/component is added to the Facility dashboard for custom ID management.
Facilities can add, update, and delete custom IDs for Agents they work with.
The interface provides validation for unique and valid custom IDs.
Estimate:

Development: 4 hours
Testing: 2 hours
Ticket 5: Data Migration for Existing Facilities

Description:
Perform a data migration for existing Facilities to associate previous assignments with the new custom IDs they provide.

Acceptance Criteria:

A data migration script is developed and tested to update existing Shifts and Agent assignments with the custom IDs.
Shifts and Agent assignments from before the custom ID implementation are correctly linked to the corresponding custom IDs.
Estimate:

Development: 5 hours
Testing: 3 hours
Note: The time/effort estimates are approximate and may vary depending on the specific details of the implementation and testing process.



I believe this is a more detailed breakdown of the ticket. I have included more information about the acceptance criteria, the implementation details, and the time/effort estimate. I have also made sure that the tickets are well-organized and easy to read.

Note: The time/effort estimates are provided as rough approximations and may vary based on the complexity of the existing codebase and the development/testing environment. 
