# NASA JPL Small-Body Database (SBDB) API Specification

**Version:** v002  
**Date:** 2026-02-13  
**Authority:** NASA Jet Propulsion Laboratory  
**Official Documentation:** https://ssd-api.jpl.nasa.gov/doc/sbdb.html

---

## Overview

The NASA JPL Small-Body Database (SBDB) API provides programmatic access to the orbital elements, physical parameters, and discovery circumstances of small Solar System bodies (asteroids, comets, and other minor planets).

---

## API Endpoint

```
https://ssd-api.jpl.nasa.gov/sbdb.api
```

**Protocol:** HTTPS only  
**Method:** GET  
**Format:** JSON response

---

## Query Parameters

### Object Selector Parameters (Mutually Exclusive)

The API supports three primary methods for object identification. **Exactly one** must be provided per query:

#### 1. `des` - Primary Designation (PREFERRED)
- **Type:** String
- **Description:** IAU/MPC-assigned primary designation
- **Format:** URL-encoded string
- **Precedence:** Highest - use for exact designation matching
- **Examples:**
  - `des=433` (numbered asteroid)
  - `des=1P` (periodic comet)
  - `des=C/1995%20O1` (long-period comet, URL-encoded)
  - `des=1I` (interstellar object 1I/'Oumuamua)
  - `des=2I` (interstellar object 2I/Borisov)
  - `des=3I%2FATLAS` (designation with URL encoding)

#### 2. `sstr` - Search String (Fallback)
- **Type:** String
- **Description:** Fuzzy search across designations, names, and aliases
- **Format:** URL-encoded string
- **Ambiguity:** May return multiple matches; caller must constrain
- **Examples:**
  - `sstr=Ceres`
  - `sstr=Halley`
  - `sstr=Oumuamua`
  - `sstr=3I%2FATLAS`

#### 3. `spk` - SPK-ID (Numeric ID)
- **Type:** Integer
- **Description:** JPL's internal Small-Body SPK (Spacecraft and Planet Kernel) identifier
- **Format:** Numeric string
- **Precedence:** Unambiguous when known
- **Examples:**
  - `spk=2000433` (Eros)
  - `spk=2001566` (Icarus)

**Precedence and Ambiguity Handling:**
- **Prefer `des`** for exact designation matching (unambiguous)
- **Prefer `spk`** when numeric ID is known (unambiguous)
- **Use `sstr`** only for name/fragment searches (may be ambiguous)
- If `sstr` returns multiple matches, refine query or use `des`/`spk`

---

## Additional Query Parameters

These optional parameters control response content and formatting:

### Data Block Parameters

#### `orb=1` - Orbital Elements
- **Default:** 0 (not included)
- **Description:** Include orbital elements block in response
- **Fields:** epoch, semi-major axis, eccentricity, inclination, etc.

#### `phys-par=1` - Physical Parameters
- **Default:** 0 (not included)
- **Description:** Include physical parameters block (H, diameter, albedo, etc.)
- **Note:** May be absent if data unavailable for object

#### `cov=1` - Covariance Matrix
- **Default:** 0 (not included)
- **Description:** Include orbital covariance matrix if available
- **Note:** Not available for all objects

#### `cad=1` - Close-Approach Data
- **Default:** 0 (not included)
- **Description:** Include close-approach data (for NEOs)
- **Note:** Only available for objects with computed close approaches

#### `alt-des=1` - Alternate Designations
- **Default:** 0 (not included)
- **Description:** Include list of alternate designations and aliases
- **Note:** Support may vary

### Formatting Parameters

#### `full-prec=1` - Full Precision
- **Default:** 0 (rounded values)
- **Description:** Return full numeric precision (no rounding)
- **Recommended:** Always use for scientific applications

#### `format=json` - Output Format
- **Default:** json
- **Description:** Explicit JSON format (other formats may be supported)

---

## Complete Query Examples

### Example 1: Designation with Full Parameters
```
https://ssd-api.jpl.nasa.gov/sbdb.api?des=3I%2FATLAS&orb=1&phys-par=1&full-prec=1
```
**Description:** Query for "3I/ATLAS" with orbital elements, physical parameters, and full precision.

### Example 2: String Search Fallback
```
https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=3I%2FATLAS&orb=1&phys-par=1&full-prec=1
```
**Description:** Fuzzy search for "3I/ATLAS" (use if designation query fails).

### Example 3: SPK ID Query
```
https://ssd-api.jpl.nasa.gov/sbdb.api?spk=<ID>&orb=1&phys-par=1&full-prec=1
```
**Description:** Query by numeric SPK-ID (when known).

### Example 4: Control Test - 1I/'Oumuamua
```
https://ssd-api.jpl.nasa.gov/sbdb.api?des=1I&orb=1&phys-par=1&full-prec=1
```
**Expected:** HTTP 200 with full orbital and physical data.

---

## URL Encoding Rules

Special characters in designation strings **must** be URL-encoded according to RFC 3986:

| Character | URL Encoding | Context | Example |
|-----------|--------------|---------|---------|
| Space     | `%20`        | Comet designations | `C/1995 O1` → `C%2F1995%20O1` |
| `/`       | `%2F`        | Designation separators | `3I/ATLAS` → `3I%2FATLAS` |
| `+`       | `%2B`        | Plus signs in names | `C/2014 UN271` |
| `(`       | `%28`        | Parentheses | `(Hale-Bopp)` → `%28Hale-Bopp%29` |
| `)`       | `%29`        | Parentheses | `(Hale-Bopp)` → `%28Hale-Bopp%29` |
| `'`       | `%27`        | Apostrophes | `'Oumuamua` → `%27Oumuamua` |

### Encoding Examples

```
C/1995 O1 (Hale-Bopp)
→ des=C%2F1995%20O1%20%28Hale-Bopp%29

3I/ATLAS
→ des=3I%2FATLAS

2014 MU69
→ des=2014%20MU69

1I/'Oumuamua
→ des=1I%2F%27Oumuamua  OR  des=1I
```

**Best Practice:** Always percent-encode reserved characters to avoid ambiguity.

---

## Response Structure

### Success Response (HTTP 200)

```json
{
  "signature": {
    "source": "NASA/JPL Small-Body Database API",
    "version": "1.5"
  },
  "object": {
    "des": "433",
    "fullname": "433 Eros (A898 PA)",
    "orbit_class": {
      "name": "Amor",
      "code": "AMO"
    },
    "kind": "an"  // a=asteroid, c=comet, n=numbered
  },
  "orbit": {
    "elements": [ /* orbital elements array */ ],
    "epoch": 2460000.5,
    "data_arc": "125 years",
    "n_obs_used": 8767
  },
  "phys_par": {
    "H": "10.31",    // absolute magnitude
    "diameter": "16.84",
    "albedo": "0.25"
  }
}
```

### Error Responses

#### HTTP 400 - Bad Request
```json
{
  "code": "400",
  "message": "invalid query parameter"
}
```

**Cause:** Missing or malformed query parameter.

#### HTTP 404 - Not Found
```json
{
  "code": "404",
  "message": "object not found"
}
```

**Cause:** No matching object in SBDB for the provided designation.

#### HTTP 500 - Internal Server Error
```json
{
  "code": "500",
  "message": "internal server error"
}
```

**Cause:** Server-side issue. Retry with exponential backoff.

---

## Canonical Working Examples

### Example 1: Query 3I/ATLAS with Full Parameters (Designation)
```
https://ssd-api.jpl.nasa.gov/sbdb.api?des=3I%2FATLAS&orb=1&phys-par=1&full-prec=1
```
**Encoded Form:** `3I%2FATLAS` (slash encoded as %2F)  
**Expected Status:** 200 OK or 404 Not Found  
**Purpose:** Primary designation query for "3I/ATLAS"

---

### Example 2: Query 3I/ATLAS with String Search (Fallback)
```
https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=3I%2FATLAS&orb=1&phys-par=1&full-prec=1
```
**Encoded Form:** `3I%2FATLAS` (slash encoded as %2F)  
**Expected Status:** 200 OK or 404 Not Found  
**Purpose:** Fuzzy search fallback if designation query fails

---

### Example 3: Query with SPK-ID (Placeholder)
```
https://ssd-api.jpl.nasa.gov/sbdb.api?spk=<ID>&orb=1&phys-par=1&full-prec=1
```
**Description:** Query by numeric SPK-ID when known  
**Expected Status:** 200 OK (if ID is valid)  
**Note:** SPK-ID for 3I/ATLAS must be determined from SBDB response

---

### Control Examples (Known Objects)

#### Example 4: Query 1I/'Oumuamua
```
https://ssd-api.jpl.nasa.gov/sbdb.api?des=1I&orb=1&phys-par=1&full-prec=1
```
**Expected Status:** 200 OK  
**Expected `fullname`:** `"1I/'Oumuamua"`

---

#### Example 5: Query 2I/Borisov
```
https://ssd-api.jpl.nasa.gov/sbdb.api?des=2I&orb=1&phys-par=1&full-prec=1
```
**Expected Status:** 200 OK  
**Expected `fullname`:** `"2I/Borisov"`

---

#### Example 6: Query 433 Eros
```
https://ssd-api.jpl.nasa.gov/sbdb.api?des=433&orb=1&phys-par=1&full-prec=1
```
**Expected Status:** 200 OK  
**Expected `fullname`:** `"433 Eros (A898 PA)"`

---

## Status Code Interpretation

| HTTP Status | Meaning | Action |
|-------------|---------|--------|
| 200         | Success | Parse JSON response |
| 400         | Bad Request | Fix query syntax |
| 404         | Not Found | Object does not exist in SBDB |
| 500         | Server Error | Retry with exponential backoff |
| 503         | Service Unavailable | API temporarily down; retry later |

---

## Best Practices

1. **Always URL-encode** special characters in designation strings.
2. **Check HTTP status** before parsing JSON response.
3. **Use `des` parameter** for exact designation matching.
4. **Use `sstr` parameter** for fuzzy name searches (e.g., common names).
5. **Implement retry logic** with exponential backoff for 5xx errors.
6. **Cache responses** locally to minimize API load (rate limiting not publicly documented but courteous).
7. **Verify IAU/MPC designation** independently before querying SBDB.

---

## IAU Designation Conventions for Interstellar Objects

Per IAU Working Group for Small Body Nomenclature:

- **1I/'Oumuamua** (2017 U1): First confirmed interstellar object
- **2I/Borisov** (C/2019 Q4): Second confirmed interstellar object
- **3I/...**: Not assigned as of 2026-02-13

**Naming Format:** `<number>I/<provisional or proper name>`

**Criterion:** Hyperbolic orbit with eccentricity > 1.0 and no evidence of Solar System origin.

---

## References

- NASA JPL SBDB API Documentation: https://ssd-api.jpl.nasa.gov/doc/sbdb.html
- IAU Minor Planet Center: https://www.minorplanetcenter.net/
- RFC 3986 (URI Generic Syntax): https://tools.ietf.org/html/rfc3986

---

**Document Authority:** TRIZEL Scientific Verification Team  
**Immutability Constraint:** This specification is frozen as of v002 and constitutes the formal reference for Claim-001 verification.
