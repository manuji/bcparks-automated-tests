import { test, expect } from '@playwright/test';

// Access Status
test('Should get access status', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/access-statuses');
    expect(response.ok()).toBeTruthy();
    expect(response.headers()["content-type"]).toContain("application/json");
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Activity Type
test('Should get access status by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/access-statuses/15')
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get activity types', async ({ request }) => {
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/activity-types');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test("Should get an activity type by ID", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/activity-types/51');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Advisory Status
test("Should get advisory status", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/advisory-statuses');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test("Should get advisory status by ID", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/advisory-statuses/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
})

// Asset types
test("Should get asset types", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/asset-types');
    const response_json = await response.json();
    console.log(response_json);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test('Should get asset types by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/asset-types/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Biogeoclimatic Zone
test("Should get biogeoclimatic zones", async ({request})=>{
    const response =  await request.get('https://bcparks.api.gov.bc.ca/api/biogeoclimatic-zones');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
})

test("Should get biogeoclimatic zone by ID", async ({request})=>{ 
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/biogeoclimatic-zones/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Business hour
test("Should get business hours", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/business-hour');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Emergency Alert 
test("Should get emergency alerts", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/emergency-alerts');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200); // Will change depending on whethere there is an alert active
    console.log(response.status());
    expect(response).not.toBeNull();
})

test("Should get an emergency alert by ID", async ({request}) =>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/emergency-alerts/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();   
});

// Event Type
test("Should get event types", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/event-types');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test("Should get an event type by ID", async ({request}) =>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/event-types/1');   
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();    
});

// Facility type
test("Should get facility types", async ({request}) =>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/facility-types');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test("Should get facility type by ID", async ({request}) =>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/facility-types/77');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Fire Ban Prohibition
test("Should get fire ban prohibitions", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/fire-ban-prohibitions');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test("Should get fire ban prohibition by ID", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/fire-ban-prohibitions/146');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Fire Centre
test("Should get fire centres", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/fire-centres');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
    expect(response).not.toBeNull();
});

test("Should get a fire centre by ID", async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/fire-centres/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Fire Zone
test('Should get fire zones', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/fire-zones');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get a fire zone by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/fire-zones/8');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Legacy-redirect
test('Should get legacy redirect', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/legacy-redirects');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get a legacy redirect by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/legacy-redirects/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Link
test('Should get links', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/links');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get link by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/links/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
    expect(response).not.toBeNull();
});

// Link Type
test('Should get link type', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/link-types');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get link type by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/link-types/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Management area
test('Should get management areas', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/management-areas');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test('Should get management area by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/management-areas/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Management Document
test('Should get management documents', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/management-documents');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get management document by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/management-documents/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Management Document Type
test('Should get management document types', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/management-document-types');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get management document type by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/management-document-types/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Marine-ecosection
test('Should get marine ecosections', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/marine-ecosections');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get marine ecosection by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/marine-ecosections/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Natural resource district
test('Should get natural resource districts', async({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/natural-resource-districts');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get natural resource district by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/natural-resource-districts/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Pages
test('Should get pages', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/pages');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get pages by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/pages/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Park access status
test('Should get park access statuses', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-access-statuses');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get park access status by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-access-statuses/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Park activity
test('Should get park activities', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-activities');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
    expect(response).not.toBeNull();
});

test('Should get park activity by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-activities/8103');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Park facility
test('Should get park facilities', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-facilities');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
    expect(response).not.toBeNull();
});

test('Should get park facility by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-facilities/8248');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Park name
test('Should get park names', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-names');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get park name by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-names/3235');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Park name type
test('Should get park name types', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-name-types');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get park name type by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-name-types/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Park operation
test('Should get park operations', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operations');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

test(' Should get park operation by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operations/236');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Park operation date
test('Should get park operation dates', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operation-dates');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get park operation date by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operation-dates/1');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
    expect(response).not.toBeNull();
});

// Park operation subarea
test('Should get park operation subareas', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operation-sub-areas');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get park operation subarea by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operation-sub-areas/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});

// Park operation subarea date
test('Should get park operation subarea date', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operation-sub-area-dates');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get park operation subarea date by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operation-sub-area-dates/3');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Park operation subarea type
test('Should get park operation subarea types', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operation-sub-area-types');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get park operation subarea types by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-operation-sub-area-types/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Park photo
test('Shoudl get park photos', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-photos');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get park photo by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-photos/243');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Park subpage
test('Should get park subpages', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-sub-pages');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get park subpages by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/park-sub-pages/3');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Protected area
test('Should get protected areas', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/protected-areas');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get protected areas by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/protected-areas/123');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Public advisory
test('Should get public advisories', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/public-advisories');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
    expect(response).not.toBeNull();
});

test('Should get public advisories by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/public-advisories/2487');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Region
test('Should return regions', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/regions');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should return region by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/regions/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Search area
test('Should get search areas', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/search-areas');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get a search area by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/search-areas/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Section
test('Should get sections', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/sections');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});  

test('Should get a section by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/sections/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Site
test('Should get sites', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/sites');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get sites by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/sites/214');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Standard message
test('Should get standard message', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/standard-messages');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get standard message by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/standard-messages/20');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Terrestrial ecosection
test('Should get terrestrial ecosections', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/terrestrial-ecosections');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

test('Should get terrestrial ecosections by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/terrestrial-ecosections/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});

// Urgency
test('Should get urgencies', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/urgencies');
    const response_json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(response_json);
    expect(response).not.toBeNull();
});

test('Should get urgencies by ID', async ({request})=>{
    const response = await request.get('https://bcparks.api.gov.bc.ca/api/urgencies/1');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response).not.toBeNull();
});