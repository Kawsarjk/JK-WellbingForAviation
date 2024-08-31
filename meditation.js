document.addEventListener("DOMContentLoaded", function() {
    const poses = [
        {
            name: "Seated Meditation (Sukhasana)",
            image: "pose1.jpg",
            instructions: "Sit on the floor with your legs crossed, either in a full lotus or half lotus . Sit up straight with your back aligned",
            duration: "5-10 minutes",
            benefits: "Promotes relaxation, improves posture, and opens the hips."
        },
        {
            name: "Corpse Pose (Savasana)",
            image: "pose2.jpeg",
            instructions: "Lie flat on your back with arms relaxed at your sides, palms facing up. Close your eyes and focus on your breath.",
            duration: "5-10 minutes",
            benefits: "Encourages deep relaxation and recovery, reduces stress, and calms the nervous system."
        },
        {
            name: "Hero Pose (Virasana)",
            image: "pose3.jpg",
            instructions: "Kneel on the floor with your knees hip-width apart. Sit back on your heels, keeping your toes underneath your feet.",
            duration: "2-3 minutes",
            benefits: "Stretches the hips, ankles, and groin. Can improve digestion and relieve fatigue."
        },
        {
            name: "Tree Pose (Vrksasana)",
            image: "pose4.jpg",
            instructions: "Stand on one foot, place the other foot on the inside of your thigh, and bring your hands together in prayer position at your chest.",
            duration: "1-2 minutes",
            benefits: "Improves balance and stability, strengthens the legs, and focuses the mind."
        },
        {
            name: "Child's Pose (Balasana)",
            image: "pose5.jpg",
            instructions: "Kneel on the floor with your knees hip-width apart. Sit back on your heels, bringing your forehead to the floor. Extend your arms out in front of you or rest them by your sides.",
            duration: "5-10 minutes",
            benefits: "Stretches the hips, thighs, and back. Promotes relaxation and can relieve stress and fatigue."
        }
    ];

    function displayRandomPose() {
        const randomPose = poses[Math.floor(Math.random() * poses.length)];
        document.getElementById("pose-image").src = randomPose.image;
        document.getElementById("pose-name").textContent = randomPose.name;
        document.getElementById("pose-instructions").textContent = randomPose.instructions;
        document.getElementById("pose-duration").textContent = `Duration: ${randomPose.duration}`;
        document.getElementById("pose-benefits").textContent = `Health Benefits: ${randomPose.benefits}`;
    }

    //  random pose 
    displayRandomPose();

    // event listener 
    document.getElementById("regenerate-button").addEventListener("click", displayRandomPose);
});
