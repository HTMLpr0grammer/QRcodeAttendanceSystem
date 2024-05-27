document.addEventListener('DOMContentLoaded', () => {
    const changePasswordLink = document.getElementById('changePasswordLink');
    const modal = document.getElementById('changePasswordModal');
    const closeModal = document.getElementById('closeModal');
    const changePasswordForm = document.getElementById('changePasswordForm');

    // Open modal when "Change Password" link is clicked
    changePasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });

    // Close modal when the close button is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of the modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    changePasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Simple validation
        if (newPassword !== confirmPassword) {
            alert("New passwords do not match!");
            return;
        }

        // Example logic for changing the password
        // This would normally involve making an API call to the backend
        console.log('Current Password:', currentPassword);
        console.log('New Password:', newPassword);

        // Close the modal
        modal.style.display = 'none';

        // Clear the form
        changePasswordForm.reset();

        // Notify the user
        alert("Password changed successfully!");
    });
});