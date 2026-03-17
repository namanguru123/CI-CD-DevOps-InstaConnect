const mongoose = require("mongoose");
const User = require("./models/User");
const Post = require("./models/Post");
const Profile = require("./models/Profile");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const samplePosts = [
  {
    title: "Landmark Ruling: New Precedent in Contract Law",
    postImage: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600&h=600&fit=crop",
  },
  {
    title: "How to Structure a Legal Memo for Maximum Impact",
    postImage: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=600&h=600&fit=crop",
  },
  {
    title: "Drafting Tips: Effective Witness Statements",
    postImage: "https://images.unsplash.com/photo-1526378729751-3b19314396d1?w=600&h=600&fit=crop",
  },
  {
    title: "Courtroom Strategy: Preparing for Cross-Examination",
    postImage: "https://images.unsplash.com/photo-1529257414775-5c31b6c3a5c7?w=600&h=600&fit=crop",
  },
  {
    title: "Understanding the Latest Compliance Regulations",
    postImage: "https://images.unsplash.com/photo-1562607682-4f48456204a6?w=600&h=600&fit=crop",
  },
  {
    title: "Client Communication: Setting Expectations Upfront",
    postImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=600&fit=crop",
  },
  {
    title: "Building a Strong Case File: Document Checklist",
    postImage: "https://images.unsplash.com/photo-1555529771-2b65fbae0d62?w=600&h=600&fit=crop",
  },
  {
    title: "Ethics Spotlight: Navigating Conflict of Interest",
    postImage: "https://images.unsplash.com/photo-1498092651950-65d6e1a455d4?w=600&h=600&fit=crop",
  },
  {
    title: "Top 5 Negotiation Techniques for Legal Settlements",
    postImage: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&h=600&fit=crop",
  },
  {
    title: "Law Tech Roundup: Tools for Research and Case Management",
    postImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=600&fit=crop",
  },
  {
    title: "Best Practices for Courtroom Presentation Slides",
    postImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=600&fit=crop",
  },
  {
    title: "Legal Writing: Clarity over Complexity",
    postImage: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=600&h=600&fit=crop",
  },
  {
    title: "Continuing Education: Upcoming CLE Topics",
    postImage: "https://images.unsplash.com/photo-1552611053-97f5e6a1d0c4?w=600&h=600&fit=crop",
  },
  {
    title: "Pro Bono Spotlight: Supporting Access to Justice",
    postImage: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=600&h=600&fit=crop",
  },
  {
    title: "Managing Stress During Trial Season",
    postImage: "https://images.unsplash.com/photo-1542178244-d59f3b11295d?w=600&h=600&fit=crop",
  },
  {
    title: "A Practical Checklist for Due Diligence",
    postImage: "https://images.unsplash.com/photo-1591696367585-910c78f593de?w=600&h=600&fit=crop",
  },
  {
    title: "Courtroom Tech: Using Evidence Presentation Software",
    postImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop",
  },
  {
    title: "Effective Brief Writing Under Deadlines",
    postImage: "https://images.unsplash.com/photo-1529484870605-b1f75d41d699?w=600&h=600&fit=crop",
  },
  {
    title: "Recent Legislative Updates: What You Need to Know",
    postImage: "https://images.unsplash.com/photo-1526378729751-3b19314396d1?w=600&h=600&fit=crop",
  },
  {
    title: "Creating a Professional Portfolio as a Junior Lawyer",
    postImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=600&fit=crop",
  },
];

const sampleUsers = [
  {
    userName: "judge_myers",
    fullName: "Avery Myers",
    email: "avery.myers@jurisconnect.local",
    password: "Justice2026",
  },
  {
    userName: "counsel_rodriguez",
    fullName: "Elena Rodriguez",
    email: "elena.rodriguez@jurisconnect.local",
    password: "Courtroom#1",
  },
  {
    userName: "docket_master",
    fullName: "Samuel Ellis",
    email: "samuel.ellis@jurisconnect.local",
    password: "Briefing2026",
  },
  {
    userName: "litigator_lee",
    fullName: "Jordan Lee",
    email: "jordan.lee@jurisconnect.local",
    password: "Motion2026",
  },
  {
    userName: "clerk_park",
    fullName: "Maya Park",
    email: "maya.park@jurisconnect.local",
    password: "Evidence!23",
  },
];

async function seedDatabase() {
  try {
    // Connect to MongoDB (fall back to local docker Mongo if no env provided)
    const mongoUrl =
      process.env.MONGODB_URL || "mongodb://localhost:27017/instadb";

    await mongoose.connect(mongoUrl);
    console.log(`Connected to MongoDB (${mongoUrl})`);

    // Clear existing data (optional)
    // await User.deleteMany({});
    // await Post.deleteMany({});
    // await Profile.deleteMany({});
    // console.log("Cleared existing data");

    // Create users
    const createdUsers = [];
    for (const user of sampleUsers) {
      const existingUser = await User.findOne({ userName: user.userName });
      if (!existingUser) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const profile = await Profile.create({
          gender: null,
          dateOfBirth: null,
          about: null,
          mobileNumber: null,
        });

        const newUser = await User.create({
          userName: user.userName,
          fullName: user.fullName,
          email: user.email,
          password: hashedPassword,
          additionDetails: profile._id,
          image: `https://api.dicebear.com/7.x/initials/svg?seed=${user.fullName}`,
        });

        profile.user = newUser._id;
        await profile.save();

        createdUsers.push(newUser);
        console.log(`✅ Created user: ${user.userName}`);
      } else {
        createdUsers.push(existingUser);
        console.log(`⏭️  User already exists: ${user.userName}`);
      }
    }

    // Create posts
    let postCount = 0;
    for (const postData of samplePosts) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
      const user = createdUsers[randomUserIndex];

      // Check if post already exists
      const existingPost = await Post.findOne({
        title: postData.title,
        createdBy: user._id,
      });

      if (!existingPost) {
        const post = await Post.create({
          title: postData.title,
          createdBy: user._id,
          postImage: postData.postImage,
        });

        // Add post to user's posts array
        await User.findByIdAndUpdate(user._id, {
          $push: { posts: post._id },
        });

        postCount++;
        console.log(`✅ Created post: "${postData.title}" by ${user.fullName}`);
      } else {
        console.log(`⏭️  Post already exists: "${postData.title}"`);
      }
    }

    console.log(`\n🎉 Seeding complete!`);
    console.log(`Created ${createdUsers.length} users`);
    console.log(`Created ${postCount} posts`);
    console.log(`Total posts in database: ${await Post.countDocuments()}`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
