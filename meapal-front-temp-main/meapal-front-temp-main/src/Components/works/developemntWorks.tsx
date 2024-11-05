/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import '../../style/visionStyle.scss';

function DevelopmentWorks() {
  return (
    <div className="developmentpage">
      <h2 className="developmentpage-h2">
        Meapal
        <span className="highlight"> Development </span>
        Vision
      </h2>
      <p className="vision-text">
        In our company, the software development section is dedicated to delivering innovative and high-quality solutions tailored to meet the unique needs of our clients. Our skilled team of developers employs the latest technologies and agile methodologies to design, develop, and maintain software applications that enhance operational efficiency and drive business growth. We prioritize collaboration and open communication throughout the development process, ensuring that our clients are actively involved and informed at every stage. From custom software applications to system integrations and enhancements, we are committed to providing robust, scalable, and user-friendly solutions that empower organizations to achieve their objectives.
      </p>
      <h2 className="developmentpage-h2">
        Meapal Software
        <span className="highlight"> Solutions  </span>
      </h2>
      <div className="proj">
        <div className="proj-titel-container"><h3 className="proj-title">Cyber Security Report Generation Tool (COCA 4000)</h3></div>
        <ul className="proj-content">
          <li>
            An internal tool specifically designed for the cyber security team for
            reports generation and multiple files management.
          </li>
          <li>
            This system allows multiple users with multiple roles to
            add information and partake in the process of the generation. Users can add POCs,
            questions, VRTs, clients, and projects inside the system, which automatically
            organizes them and eases the process of searching.
          </li>
        </ul>

        <div className="heading-sm">Features:</div>
        <div className="features">
          <span>User Management</span>
          <span>Organization and Project Management</span>
          <span>Reporting and Metrics</span>
          <span>Vulnerability Reporting</span>
          <span>Vulnerability Management</span>
        </div>

      </div>

      <div className="proj">
        <div className="proj-titel-container"><h3 className="proj-title">Main Frame Dashboard (Carmf)</h3></div>
        <ul className="proj-content">
          <li>
            A dashboard made for the mainframe ZOS systems, which automates manual tasks by
            dispatching a defined sequence of commands to ZOS server, making it much easier
            for the users to get the job done, by replacing the old AS400 command line interface
            with a modern user friendly web UI and highly saving time and increasing the
            productivity, users can create custom commands inside the system to be sent to the
            server, and the customize the result which will be shown to the user,
            and also schedule the commands to run at any given time.
          </li>
        </ul>

        <div className="heading-sm">Features:</div>
        <div className="features">
          <span>User Management</span>
          <span>Adding servers</span>
          <span>Commands creation</span>
          <span>Dashboard</span>
          <span>Command Scheduling</span>
        </div>

      </div>

      <div className="proj">
        <div className="proj-titel-container"><h3 className="proj-title">Self-Service Portal</h3></div>
        <ul className="proj-content">
          <li>
            The Self-Service Portal empowers employees by centralizing access to essential
            services, enabling them to manage tasks and requests independently. Through its
            intuitive interface, it streamlines administrative processes, enhancing efficiency
            and productivity. By reducing reliance on support staff, it fosters a culture of
            self-reliance and accountability. Real-time visibility into request status promotes
            improved communication and faster resolutions, heightening user satisfaction. Overall,
            the portal represents a transformative tool for optimizing resource utilization and
            cultivating a more agile workforce.
          </li>
        </ul>

        <div className="heading-sm">Features:</div>
        <div className="features">
          <span>Request access to specific groups within GitLab</span>
          <span>Request account creation in Jupyter</span>
          <span>Manage password changes for Active Directory accounts</span>
          <span>Manage password changes for Extranet accounts</span>
          <span>Submit requests for software installation</span>
        </div>

      </div>

      <div className="proj">
        <div className="proj-titel-container"><h3 className="proj-title">Database Monitoring</h3></div>
        <ul className="proj-content">
          <li>
            This database monitoring is a comprehensive solution for streamlining database
            administration tasks. It offers tools for development, deployment, monitoring,
            and performance optimization, along with features for data protection and compliance.
            With capabilities for version control, schema comparison, and synchronization, it helps
            maintain consistency across environments. Overall, it's a powerful tool for enhancing
            efficiency, reliability, and security throughout the database lifecycle.
          </li>
        </ul>

        <div className="heading-sm">Features:</div>
        <div className="features">
          <span>Development Tools</span>
          <span>Deployment Automation</span>
          <span>Graphs System</span>
          <span>Monitoring and Performance Optimization</span>
          <span>User Management</span>
        </div>

      </div>

      <div className="proj">
        <div className="proj-titel-container"><h3 className="proj-title">Dirprod Bot</h3></div>
        <ul className="proj-content">
          <li>
            This application is a chatbot integrated with Teams, designed to support
            companies with remote employees. It engages employees through interactive
            questions to assess well-being and productivity. Admins can monitor responses
            via a centralized dashboard, gaining real-time insights for proactive management.
            It enhances communication and fosters a supportive work environment for remote teams.
          </li>
        </ul>

        <div className="heading-sm">Features:</div>
        <div className="features">
          <span>Remote Work Chatbot</span>
          <span>Employee Engagement</span>
          <span>Admin Dashboard</span>
          <span>Real-time Insights</span>
          <span>Enhanced Communication</span>
        </div>

      </div>

      <div className="proj">
        <div className="proj-titel-container"><h3 className="proj-title">Cockpit Tools</h3></div>
        <ul className="proj-content">
          <li>
            The integration between the cockpit system and the EasyVista system
            via APIs establishes a seamless connection, enabling efficient data
            exchange and collaboration between the two platforms. By synchronizing
            data in real-time, updates made in either system are immediately reflected in the other,
            ensuring consistency and accuracy across workflows.
          </li>
        </ul>

        <div className="heading-sm">Features:</div>
        <div className="features">
          <span>API Integration</span>
          <span>Real-Time Data Sync</span>
          <span>Bi-Directional Communication</span>
          <span>Automated Processes</span>
          <span>Enhanced Efficiency</span>
          <span>Customizable Mapping</span>
        </div>

      </div>

      <div className="proj">
        <div className="proj-titel-container"><h3 className="proj-title">Game Management System</h3></div>
        <ul className="proj-content">
          <li>
            The Game Management System is a centralized platform for stakeholders including users,
            players, attendees, and hosts. It offers individualized dashboards for each game,
            providing real-time updates on schedules and results. Key features include robust user
            management for efficient account and permission management. Participants can register
            for events and access personalized schedules. Attendees benefit from ticket purchasing
            and venue information. Hosts can manage venues, coordinate volunteers, and promote
            events.
          </li>
        </ul>

        <div className="heading-sm">Features:</div>
        <div className="features">
          <span>Individualized Dashboards</span>
          <span>Real-time Updates</span>
          <span>User Management</span>
          <span>Event Registration</span>
          <span>Venue Management</span>
        </div>
      </div>

      <div className="proj">
        <div className="proj-titel-container"><h3 className="proj-title">AS400 Automation (BSF)</h3></div>
        <ul className="proj-content">
          <li>
            BSF automates manual tasks by dispatching a defined sequence of commands to
            an AS400 server, making it much easier for the users to get the job done, by
            replacing the old AS400 command line interface with a modern user-friendly web
            UI and highly saving time and increasing the productivity by demolishing the need
            to re-execute every command to achieve a repetitive task. it does that by enabling
            the users to define tasks in a generic way with variable parameters to be dispatched
            to the server and reports the result of the execution back to the user. It also allows
            users to create collections of the previously defined tasks to be executed in sequence
            and ensures the success of each task before executing the next.
          </li>
        </ul>

        <div className="heading-sm">Features:</div>
        <div className="features">
          <span>Task Creation with Variable Parameters</span>
          <span>Sequential Execution in Shops</span>
          <span>Comprehensive Task Execution Reporting</span>
          <span>Task Collection Management</span>
        </div>
      </div>

      <div className="proj">
        <div className="proj-titel-container"><h3 className="proj-title">MEAPAL ERPNEXT</h3></div>
        <ul className="proj-content">
          <li>
            Simplify and streamline your global business operations with a
            centralized ERP solution. Manage financials, sales, supply chain,
            HR, and more with a customizable and adaptable platform.
          </li>
        </ul>

        <div className="heading-sm">Features:</div>
        <div className="features">
          <span>Sales & CRM</span>
          <span>Purchasing & Supply Chain</span>
          <span>Manufacturing</span>
          <span>Project Management</span>
          <span>Business Intelligence & Reporting</span>
          <span>E-commerce Integration</span>
        </div>

      </div>
    </div>
  );
}
export default DevelopmentWorks;
