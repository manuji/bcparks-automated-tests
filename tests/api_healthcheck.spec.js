import { test, expect } from '@playwright/test';

// Access Status
test('Should get access status', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/access-statuses');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

// Activity Type
test('Should get access status by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/access-statuses/15')
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test('Should get activity types', async ({ request }) => {
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/activity-types');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test("Should get an activity type by ID", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/activity-types/51');
    const response_json = await response.json();
    console.log(response_json);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

// Advisory Status
test("Should get advisory status", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/advisory-statuses');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test("Should get advisory status by ID", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/advisory-statuses/1');
    const response_json = await response.json();
    console.log(response_json);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
})

// Asset types
test("Should get assert types", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/asset-types');
    const response_json = await response.json();
    console.log(response_json);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

// Asset types by ID


// Biogeoclimatic Zone
test("Should get biogeoclimatic zones", async ({request})=>{
    const response =  await request.get('https://bcparks.api.gov.bc.ca/api/biogeoclimatic-zones');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
})

test("Should get biogeoclimatic zone by ID", async ({request})=>{ 
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/biogeoclimatic-zones/1');
    const response_json = await response.json();
    console.log(response_json);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

// Business hour
test("Should get business hours", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/business-hour');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

// Emergency Alert 
test("Should get emergency alerts", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/emergency-alerts');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200); // Will change depending on whethere there is an alert active
    console.log(response.status());
})

test("Should get an emergency alert by ID", async ({request}) =>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/emergency-alerts/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);   
});

// Event Type
test("Should get event types", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/event-types');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test("Should get an event type by ID", async ({request}) =>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/event-types/1');
    const response_json = await response.json();    
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);    
});

// Facility type
test("Should get facility types", async ({request}) =>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/facility-types');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test("Should get facility type by ID", async ({request}) =>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/facility-types/77');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json); 
});

// Fire Ban Prohibition
test("Should get fire ban prohibitions", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/fire-ban-prohibitions');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test("Should get fire ban prohibition by ID", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/fire-ban-prohibitions/146');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Fire Centre
test("Should get fire centres", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/fire-centres');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test("Should get a fire centre by ID", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/fire-centres/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Fire Zone
test('Should get fire zones', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/fire-zones');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get a fire zone by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/fire-zones/8');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Legacy-redirect
test('Should get legacy redirect', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/legacy-redirects');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get a legacy redirect by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/legacy-redirects/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Link
test('Should get links', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/links');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get link by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/links/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Link Type
test('Should get link type', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/link-types');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get link type by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/link-types/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Management area
test('Should get management areas', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/management-areas');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get management area by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/management-areas/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Management Document
test('Should get management documents', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/management-documents');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get management document by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/management-documents/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Management Document Type
test('Should get management document types', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/management-document-types');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test('Should get management document type by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/management-document-types/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Marine-ecosection
test('Should get marine ecosections', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/marine-ecosections');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get marine ecosection by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/marine-ecosections/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Natural resource district
test('Should get natural resource districts', async({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/natural-resource-districts');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get natural resource district by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/natural-resource-districts/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Pages
test('Should get pages', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/pages');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get pages by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/pages/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Park access status
test('Should get park access statuses', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-access-statuses');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get park access status by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-access-statuses/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Park activity
test('Should get park activities', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-activities');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get park activity by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-activities/8103');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Park facility
test('Should get park facilities', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-facilities');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get park facility by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-facilities/8248');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Park name
test('Should get park names', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-names');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get park name by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-names/3235');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Park name type
test('Should get park name types', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-name-types');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get park name type by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-name-types/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Park operation
test('Should get park operations', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operations');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test(' Should get park operation by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operations/236');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Park operation date
test('Should get park operation dates', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operation-dates');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get park operation date by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operation-dates/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Park operation subarea
test('Should get park operation subareas', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operation-sub-areas');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get park operation subarea by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operation-sub-areas/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Park operation subarea date
test('Should get park operation subarea date', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operation-sub-area-dates');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get park operation subarea date by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operation-sub-area-dates/3');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Park operation subarea type
test('Should get park operation subarea types', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operation-sub-area-types');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get park operation subarea types by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operation-sub-area-types/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Park photo
test('Shoudl get park photos', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-photos');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get park photo by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-photos/243');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Park subpage
test('Should get park subpages', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-sub-pages');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get park subpages by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-sub-pages/3');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Protected area
test('Should get protected areas', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/protected-areas');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get protected areas by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/protected-areas/123');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Public advisory
test('Should get public advisories', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/public-advisories');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get public advisories by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/public-advisories/2487');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Region
test('Should return regions', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/regions');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should return region by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/regions/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Search area
test('Should get search areas', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/search-areas');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get a search area by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/search-areas/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Section
test('Should get sections', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/sections');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});  

test('Should get a section by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/sections/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Site
test('Should get sites', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/sites');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get sites by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/sites/214');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Standard message
test('Should get standard message', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/standard-messages');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get standard message by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/standard-messages/20');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Terrestrial ecosection
test('Should get terrestrial ecosections', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/terrestrial-ecosections');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get terrestrial ecosections by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/terrestrial-ecosections/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

// Urgency
test('Should get urgencies', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/urgencies');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});

test('Should get urgencies by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/urgencies/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
});