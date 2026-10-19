// Shared, mutable scroll landmarks written by RoundedScrollTransition and read
// by the navbar. Kept outside React state because it changes on every refresh.
export const scrollMap = {
  /** scrollY at which the hero → profile-card morph is complete */
  aboutY: 0,
}
