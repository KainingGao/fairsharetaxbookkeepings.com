import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const posts = {
  7: {
  title: "Why We Support Low-Income Households and Small Business Owners",
  date: "Feb 15, 2025",
  category: "Special Programs",
  content: `
    <div class="space-y-8">
      <div>
        <h2 class="text-2xl font-bold mb-6">About the Program</h2>
        <p class="mb-4">
          I have been volunteering to help low income families and seniors file their tax returns for free through VAT/TCE. This program is designed to provide quality tax assistance at no cost to those who qualify.
        </p>
        <p class="mb-4">
          Unfortunately, some applicants are rejected because certain income items or expenses fall outside the program’s eligibility guidelines.
        </p>
        <p class="mb-4">
          To ensure everyone gets the help they need, I am working on offering a very low-cost alternative – just above free – so they can avoid being exploited by high fees from some greedy tax companies.
        </p>
        <p class="mb-4">
          This initiative aims to empower individuals who might otherwise be left without support, ensuring fair access to essential tax services.
        </p>
      </div>

      <div>
       
        <p class="mt-4">
          This approach ensures that everyone, regardless of minor discrepancies in income or expenses, has access to affordable tax assistance.
        </p>
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-6">Get Involved or Learn More</h2>
        <p class="mb-4">
          If you or someone you know could benefit from this service, or if you are interested in volunteering, please reach out for more information.
        </p>
        <p class="space-y-2">
          <span class="block">📞 Call Us: <a href="tel:+15153379289" class="text-teal-600 hover:text-teal-700">(515) 337-9289</a></span>
          <span class="block">📧 Email Us: <a href="mailto:info@fairsharetaxbookkeepings.com" class="text-teal-600 hover:text-teal-700">info@fairsharetaxbookkeepings.com</a></span>
        </p>
      </div>
    </div>
  `
},
  6: {
    title: "Our Small Business Discounted Tax Preparation Program",
    date: "March 20, 2024",
    category: "Special Programs",
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-bold mb-6">❓ How this Program Works</h2>

          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-4">1️⃣ Personal Tax Assessment (Free Consultation)</h3>

              <p class="mb-4">We start with a free, no-obligation consultation to understand your business situation. We review:</p>

              <ul class="list-none space-y-2">
                <li>✅ Your business income & expenses</li>
                <li>✅ Potential deductions & credits</li>
                <li>✅ Areas we can reduce your tax liabilities</li>
              </ul>

              <p class="mt-4">📌 <strong>Why This Matters:</strong> Many small businesses overpay on taxes simply because they don't claim all available deductions. We make sure you don't leave money on the table.</p>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-4">2️⃣ Special Discounted Tax Preparation</h3>

              <p class="mb-4">To support small businesses, we are offering exclusive discounts for businesses that:</p>

              <ul class="list-none space-y-2">
                <li>✅ Have lower income due to economic conditions</li>
                <li>✅ Are new startups trying to get on their feet</li>
                <li>✅ Have limited accounting resources and need affordable tax help</li>
              </ul>

              <p class="mt-4">📌 <strong>How Much Can You Save?</strong></p>

              <p class="mt-2">💰 Discounts vary based on your business situation, but our goal is to offer a fair, affordable price for struggling business owners.</p>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-4">3️⃣ Maximizing Deductions & Credits</h3>

              <p class="mb-4">We specialize in helping small businesses find every tax-saving opportunity. This includes:</p>

              <ul class="list-none space-y-2">
                <li>✅ Home office deductions</li>
                <li>✅ Vehicle & mileage expenses</li>
                <li>✅ Business equipment & technology write-offs</li>
                <li>✅ Self-employment tax reductions</li>
                <li>✅ Qualified Business Income Deduction (QBID) for sole proprietors & LLCs</li>
              </ul>

              <p class="mt-4">📌 <strong>Why This Matters:</strong></p>

              <p class="mt-2">💰 Every dollar saved in taxes can be reinvested into growing your business!</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6">Get Started Today!</h2>

          <p class="mb-4">If you're a small business owner and think you qualify for our Small Business Tax Relief Program, don't wait!</p>

          <p class="space-y-2">
            <span class="block">📞 Call Us: <a href="tel:+15153379289" class="text-teal-600 hover:text-teal-700">(515) 337-9289</a></span>
            <span class="block">📧 Email Us: <a href="mailto:info@fairsharetaxbookkeepings.com" class="text-teal-600 hover:text-teal-700">info@fairsharetaxbookkeepings.com</a></span>
          </p>
        </div>
      </div>
    `
  },
  1: {
    title: "2024 Tax Season Updates: What You Need to Know",
    date: "March 15, 2024",
    category: "Tax Updates",
    content: `
      <h2>Key Changes for 2024</h2>

      <p>The 2024 tax season brings several important changes that taxpayers need to be aware of. The IRS has implemented new regulations and adjusted various thresholds to account for inflation.</p>
      
      <h3>Standard Deduction Increases</h3>

      <p>For 2024, the standard deduction has been increased to account for inflation. Single filers will see their standard deduction rise to $13,850, while married couples filing jointly will have a standard deduction of $27,700.</p>
      
      <h3>Tax Bracket Adjustments</h3>

      <p>Tax brackets have been adjusted for inflation as well. This means you may find yourself in a different tax bracket than last year, even if your income hasn't changed significantly.</p>
      
      <h3>Important Deadlines</h3>

      <p>The regular tax filing deadline remains April 15, 2024, for most taxpayers. However, residents of certain states may have different deadlines due to local holidays or other factors.</p>
      
      <h2>New Tax Credits and Deductions</h2>

      <p>Several new tax credits and deductions have been introduced or modified for the 2024 tax year. These changes could significantly impact your tax return.</p>
      
      <h3>Energy-Efficient Home Improvements</h3>

      <p>The energy-efficient home improvement credit has been expanded, offering more opportunities for homeowners who make qualifying improvements to their residences.</p>
      
      <h2>Preparing for Tax Season</h2>

      <p>To ensure a smooth tax filing process, gather all necessary documents early and consider scheduling a consultation with a tax professional to discuss your specific situation.</p>
    `
  },
  2: {
    title: "Small Business Bookkeeping: Best Practices for Success",
    date: "March 10, 2024",
    category: "Bookkeeping",
    content: `
      <h2>The Foundation of Good Bookkeeping</h2>

      <p>Effective bookkeeping is crucial for business success. It provides clear insights into your financial health and helps you make informed decisions about your business's future.</p>
      
      <h3>Separate Personal and Business Finances</h3>

      <p>One of the most important steps in business bookkeeping is maintaining separate personal and business accounts. This separation makes it easier to track business expenses and simplifies tax preparation.</p>
      
      <h3>Regular Record Keeping</h3>

      <p>Establish a routine for recording transactions, reconciling accounts, and reviewing financial statements. Consistency is key to maintaining accurate records.</p>
      
      <h2>Digital Tools and Automation</h2>

      <p>Modern bookkeeping software can automate many tasks and reduce errors. Consider implementing digital solutions to streamline your bookkeeping processes.</p>
      
      <h3>Cloud-Based Solutions</h3>

      <p>Cloud-based bookkeeping software offers accessibility and automatic backups, making it easier to maintain accurate records from anywhere.</p>
      
      <h2>Common Bookkeeping Mistakes to Avoid</h2>

      <p>Learn about common pitfalls in small business bookkeeping and how to avoid them to maintain healthy financial records.</p>
    `
  },
  3: {
    title: "Understanding Tax Deductions for Remote Workers",
    date: "March 5, 2024",
    category: "Tax Tips",
    content: `
      <h2>Home Office Deductions</h2>

      <p>Remote workers may be eligible for home office deductions if they meet certain criteria. Learn about the requirements and how to calculate your deduction.</p>
      
      <h3>Qualifying for the Deduction</h3>

      <p>To qualify for a home office deduction, you must use part of your home regularly and exclusively for business purposes. This space must be your principal place of business.</p>
      
      <h2>Equipment and Supply Deductions</h2>

      <p>Remote workers can deduct the cost of necessary equipment and supplies used for work. This includes computers, office furniture, and other essential items.</p>
      
      <h3>Internet and Phone Expenses</h3>

      <p>Learn how to properly calculate and deduct the business portion of your internet and phone expenses.</p>
      
      <h2>Documentation Requirements</h2>

      <p>Proper documentation is crucial for claiming remote work deductions. Keep detailed records of all work-related expenses and maintain supporting documentation.</p>
    `
  },
  4: {
    title: "Financial Planning for Small Business Owners",
    date: "February 28, 2024",
    category: "Business Planning",
    content: `
      <h2>Creating a Financial Strategy</h2>

      <p>A solid financial strategy is essential for business growth and sustainability. Learn how to develop a comprehensive plan for your business.</p>
      
      <h3>Budgeting and Forecasting</h3>

      <p>Effective budgeting helps you allocate resources efficiently and plan for future growth. Learn key budgeting techniques and forecasting methods.</p>
      
      <h2>Cash Flow Management</h2>

      <p>Managing cash flow is crucial for business survival. Discover strategies for maintaining healthy cash flow and avoiding common pitfalls.</p>
      
      <h3>Emergency Fund Planning</h3>

      <p>Building and maintaining an emergency fund is essential for business stability. Learn how to determine the right amount and how to build it effectively.</p>
      
      <h2>Investment Strategies</h2>

      <p>Explore different investment options for small business owners and learn how to balance risk and reward in your investment portfolio.</p>
    `
  },
  5: {
    title: "Maximizing Your Tax Refund: Expert Tips",
    date: "February 20, 2024",
    category: "Tax Tips",
    content: `
      <h2>Understanding Available Deductions</h2>

      <p>Many taxpayers miss out on valuable deductions simply because they're unaware of them. Learn about commonly overlooked deductions that could increase your refund.</p>
      
      <h3>Education-Related Deductions</h3>

      <p>If you're pursuing education related to your current work, you may be eligible for various deductions and credits. Learn about qualifying expenses and limitations.</p>
      
      <h2>Charitable Contributions</h2>

      <p>Charitable giving can reduce your tax liability while supporting causes you care about. Learn how to properly document and claim charitable deductions.</p>
      
      <h3>Documentation Requirements</h3>

      <p>Proper documentation is crucial for claiming deductions. Learn what records you need to keep and how long to maintain them.</p>
      
      <h2>Tax Planning Strategies</h2>

      <p>Effective tax planning throughout the year can help maximize your refund. Discover strategies for reducing your tax liability legally and ethically.</p>
    `
  }
};

function PostDetail() {
  const { id } = useParams();
  const post = posts[Number(id)];

  if (!post) {
    return (
      <div className="py-12 text-center">
        <p>Post not found</p>
        <Link to="/posts" className="text-teal-600 hover:text-teal-700">
          Return to Posts
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/posts" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Posts
        </Link>
        
        <article className="bg-white rounded-lg shadow-md p-8">
          <header className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-teal-700 bg-teal-100">
              {post.category}
            </span>
            <h1 className="mt-4 text-4xl font-bold text-gray-900">{post.title}</h1>
            <time className="block mt-4 text-gray-500">{post.date}</time>
          </header>

          <div 
            className="prose prose-lg max-w-none prose-headings:mb-4 prose-p:mb-4 prose-ul:mb-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}

export default PostDetail;