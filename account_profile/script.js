document.addEventListener('DOMContentLoaded', () => {
    const changePasswordLink = document.getElementById('changePasswordLink');
    const modal = document.getElementById('changePasswordModal');
    const closeModal = document.getElementById('closeModal');
    const changePasswordForm = document.getElementById('changePasswordForm');

    changePasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    changePasswordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (newPassword !== confirmPassword) {
            alert("New passwords do not match!");
            return;
        }

        console.log('Current Password:', currentPassword);
        console.log('New Password:', newPassword);

        modal.style.display = 'none';

        changePasswordForm.reset();

        alert("Password changed successfully!");
    });
});
