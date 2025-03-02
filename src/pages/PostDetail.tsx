import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const posts = {
  9: {
    title: "Strategic Retirement Contributions: A Tax-Efficient Approach to Wealth Building",
    date: "February 26, 2025",
    category: "Tax Planning",
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-bold mb-6">Understanding the Tax Benefits of Retirement Contributions</h2>
          <p class="mb-4">
            One of the most effective and accessible strategies for reducing your taxable income is making strategic contributions to retirement accounts. These contributions not only help secure your financial future but can also provide immediate tax benefits.
          </p>
          <p class="mb-4">
            The tax advantages of retirement contributions are substantial: many retirement plans allow you to contribute pre-tax dollars, effectively reducing your taxable income for the current year while building wealth for the future.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6">Traditional 401(k) and IRA Contributions</h2>
          
          <h3 class="text-xl font-semibold mb-4">401(k) Plans: Employer-Sponsored Tax Advantages</h3>
          <p class="mb-4">
            Contributing to a traditional 401(k) plan is one of the most straightforward ways to reduce your taxable income:
          </p>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Contributions are made with pre-tax dollars, directly reducing your taxable income</li>
            <li>For 2025, you can contribute up to $23,500 ($30,500 if you're 50 or older with catch-up contributions)</li>
            <li>Many employers offer matching contributions—essentially free money that also grows tax-deferred</li>
          </ul>
          
          <div class="bg-blue-50 p-4 border-l-4 border-blue-400 mb-6">
            <p class="font-semibold">Example:</p>
            <p>If your annual salary is $80,000 and you contribute $10,000 to your 401(k), your taxable income drops to $70,000. In the 22% tax bracket, this saves you $2,200 in federal income taxes for the year.</p>
          </div>
          
          <h3 class="text-xl font-semibold mb-4">Traditional IRAs: Individual Tax Control</h3>
          <p class="mb-4">
            Individual Retirement Accounts (IRAs) offer similar tax advantages:
          </p>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>For 2025, you can contribute up to $7,000 ($8,000 if you're 50 or older)</li>
            <li>Contributions may be tax-deductible depending on your income and whether you have access to an employer plan</li>
            <li>Even partial deductibility can help reduce your tax burden</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6">Self-Employed Retirement Options</h2>
          
          <p class="mb-4">
            Self-employed individuals have access to even more powerful retirement savings vehicles:
          </p>
          
          <h3 class="text-xl font-semibold mb-4">SEP IRAs</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Contribute up to 25% of your net self-employment income or $69,000 (2025), whichever is less</li>
            <li>Contributions are tax-deductible, significantly reducing self-employment tax liability</li>
            <li>Simple to establish and maintain with minimal paperwork</li>
          </ul>
          
          <h3 class="text-xl font-semibold mb-4">Solo 401(k) Plans</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Make contributions as both employer and employee</li>
            <li>Potentially contribute more than with a SEP IRA at the same income level</li>
            <li>Total contributions can reach up to $69,000 in 2025 ($76,500 if age 50+)</li>
          </ul>
          
          <div class="bg-yellow-50 p-4 border-l-4 border-yellow-400 mb-6">
            <p class="font-semibold">Tax Planning Tip:</p>
            <p>Self-employed individuals can potentially establish and fund a retirement plan up until the tax filing deadline (including extensions), allowing for tax planning even after the calendar year ends.</p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6">Strategic Timing of Contributions</h2>
          
          <p class="mb-4">
            When you make your contributions can be almost as important as how much you contribute:
          </p>
          
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Early-year contributions</strong> maximize tax-deferred growth potential</li>
            <li><strong>Year-end contributions</strong> allow for more precise tax planning when you know your annual income</li>
            <li><strong>IRA contributions</strong> can be made until the tax filing deadline (typically April 15) for the previous tax year</li>
          </ul>
          
          <p class="mb-4">
            For those with variable income, consider setting aside funds in a savings account throughout the year, then making a lump-sum contribution when you have better visibility into your tax situation.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6">Beyond Traditional Retirement Accounts</h2>
          
          <h3 class="text-xl font-semibold mb-4">Health Savings Accounts (HSAs)</h3>
          <p class="mb-4">
            HSAs offer a unique triple tax advantage:
          </p>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Contributions are tax-deductible</li>
            <li>Growth is tax-free</li>
            <li>Withdrawals for qualified medical expenses are tax-free</li>
            <li>For 2025, you can contribute up to $4,150 for individual coverage or $8,300 for family coverage (with an additional $1,000 catch-up contribution if you're 55 or older)</li>
          </ul>
          
          <p class="mb-4">
            After age 65, HSA funds can be withdrawn for any purpose (subject to ordinary income tax but no penalties), effectively functioning as an additional retirement account.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6">Balancing Roth and Traditional Contributions</h2>
          
          <p class="mb-4">
            While traditional retirement accounts offer immediate tax benefits, Roth accounts provide tax-free growth and withdrawals in retirement:
          </p>
          
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Consider your current tax bracket versus your expected retirement tax bracket</li>
            <li>Higher-income earners often benefit more from traditional pre-tax contributions</li>
            <li>Those early in their careers may benefit from Roth contributions while in lower tax brackets</li>
            <li>A mix of both traditional and Roth accounts provides tax diversification in retirement</li>
          </ul>
          
          <div class="bg-green-50 p-4 border-l-4 border-green-400 mb-6">
            <p class="font-semibold">Strategic Approach:</p>
            <p>Consider a "tax bracket filling" strategy—make traditional contributions to lower your income to the top of a lower tax bracket, then make Roth contributions for additional retirement savings.</p>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6">Maximizing Employer Benefits</h2>
          
          <p class="mb-4">
            Don't leave money on the table when it comes to employer retirement benefits:
          </p>
          
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Always contribute at least enough to get the full employer match—this is essentially free money</li>
            <li>Take advantage of automatic contribution increases if offered by your plan</li>
            <li>Consider after-tax contributions if your plan allows them (which may later be converted to Roth)</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6">Need Help Optimizing Your Retirement Contributions?</h2>
          
          <p class="mb-4 bg-yellow-50 p-4 border-l-4 border-yellow-400">
            <strong>Special Note for Seniors:</strong> For those seniors, whose taxable income is lower than his (or her) standard deduction, can avoid filing tax return if you don't have any tax withheld in your 1099-SSA or request to not withhold any tax on that, especially when the weather is not getting better in the tax season.
          </p>
          
          <p class="mb-4">
            Retirement contribution strategies should be part of your overall financial and tax planning. Our tax professionals can help you:
          </p>
          
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Determine the optimal contribution amounts based on your tax situation</li>
            <li>Balance pre-tax and Roth contributions</li>
            <li>Identify additional tax-saving opportunities</li>
            <li>Develop a comprehensive retirement savings strategy</li>
          </ul>
          
          <p class="mt-6 font-semibold">
            Contact us today for a personalized consultation to optimize your retirement contributions and minimize your tax burden.
          </p>
        </div>
      </div>
    `
  },
  8: {
    title: "Do I Need to File a Tax Return This Year?",
    date: "February 26, 2025",
    category: "Tax Tips",
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-bold mb-6">Understanding Filing Requirements</h2>
          <p class="mb-4">
            Not everyone is required to file a tax return each year. Whether you need to file depends on several factors, including your income level, filing status, age, and specific financial situations.
          </p>
          <p class="mb-4">
            However, even if you're not required to file, you might want to do so anyway if you're eligible for refundable tax credits or had federal income tax withheld from your pay.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6">Income Thresholds for Filing (2024 Tax Year)</h2>
          
          <h3 class="text-xl font-semibold mb-4">For Single Filers:</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Under 65: You must file if your gross income was at least $13,850</li>
            <li>65 or older: You must file if your gross income was at least $15,700</li>
          </ul>
          
          <h3 class="text-xl font-semibold mb-4">For Married Filing Jointly:</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Both spouses under 65: You must file if your gross income was at least $27,700</li>
            <li>One spouse 65 or older: You must file if your gross income was at least $29,200</li>
            <li>Both spouses 65 or older: You must file if your gross income was at least $30,700</li>
          </ul>
          
          <h3 class="text-xl font-semibold mb-4">For Head of Household:</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Under 65: You must file if your gross income was at least $20,800</li>
            <li>65 or older: You must file if your gross income was at least $22,650</li>
          </ul>
          
          <h3 class="text-xl font-semibold mb-4">For Married Filing Separately:</h3>
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Any age: You must file if your gross income was at least $5</li>
          </ul>
          
          <p class="mt-4 italic text-gray-600">
            Note: These thresholds are subject to change each year. Always check the latest IRS guidelines or consult with a tax professional.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6">Special Situations That Require Filing</h2>
          
          <p class="mb-4">
            Even if your income is below the thresholds above, you may still need to file if:
          </p>
          
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>You're self-employed with net earnings of $400 or more</li>
            <li>You owe special taxes (like alternative minimum tax, household employment taxes, etc.)</li>
            <li>You received advance payments of the premium tax credit</li>
            <li>You had wages of $108.28 or more from a church or qualified church-controlled organization exempt from employer Social Security and Medicare taxes</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6">Reasons to File Even If Not Required</h2>
          
          <p class="mb-4">
            You might want to file a tax return even if you're not required to if:
          </p>
          
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>You had federal income tax withheld from your pay and want to get a refund</li>
            <li>You qualify for refundable tax credits like the Earned Income Tax Credit (EITC), Child Tax Credit, or American Opportunity Credit</li>
            <li>You want to claim a refund for overpaid Social Security or Medicare taxes</li>
            <li>You need to establish a record of income for loan applications, government benefits, or other purposes</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6">Dependents with Income</h2>
          
          <p class="mb-4">
            If you can be claimed as a dependent on someone else's return, different filing requirements apply. Generally, dependents must file if:
          </p>
          
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Their unearned income (such as interest or dividends) exceeds $1,250</li>
            <li>Their earned income (such as wages) exceeds $13,850</li>
            <li>Their gross income exceeds the larger of $1,250 or their earned income (up to $13,850) plus $400</li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-6">Need Help Determining If You Should File?</h2>
          
          <p class="mb-4 bg-yellow-50 p-4 border-l-4 border-yellow-400">
            <strong>Special Note for Seniors:</strong> For those seniors, whose taxable income is lower than his (or her) standard deduction, can avoid filing tax return if you don't have any tax withheld in your 1099-SSA or request to not withhold any tax on that, especially when the weather is not getting better in the tax season.
          </p>
          
          <p class="mb-4">
            If you're unsure whether you need to file a tax return, we can help. Our tax professionals can review your specific situation and provide guidance on:
          </p>
          
          <ul class="list-disc pl-6 mb-4 space-y-2">
            <li>Whether you're required to file based on your income and situation</li>
            <li>What tax credits you might be eligible for</li>
            <li>How to maximize your potential refund</li>
            <li>The best filing status for your situation</li>
          </ul>
          
          <p class="mt-6 font-semibold">
            Contact us today for a free consultation to determine your filing requirements and maximize your potential refund.
          </p>
        </div>
      </div>
    `
  },
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