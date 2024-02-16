let dialog = document.getElementById("profile-details-edit");
function showEditModal() {
  dialog.showModal();
}
function closeEditModal() {
  dialog.close();
}

// Change Account Details

// Select the account  details

const profileName = document.querySelector("#profileName");
const mainProfileName = document.querySelector("#main-profile-name");
const profileBio = document.querySelector("#profileBio");
const profileWebsite = document.querySelector("#profileWebsite");

// Inputs in the change details Modal
const nameInput = document.querySelector("#changeNameInput");
const bioInput = document.querySelector("#changeBioInput");
const websiteInput = document.querySelector("#changeWebsiteInput");

// assign the old Values
nameInput.value = profileName.innerHTML;
bioInput.value = profileBio.innerHTML;
websiteInput.value = profileWebsite.href;
console.clear();
const saveChanges = () => {
  const websiteValue = websiteInput.value;
  profileName.innerHTML = nameInput.value;
  profileBio.innerHTML = bioInput.value;
  mainProfileName.innerHTML = nameInput.value;
  profileWebsite.innerHTML = websiteValue.split("").slice(0, 30).join("");
  profileWebsite.href = websiteInput.value;
  closeEditModal();
};
