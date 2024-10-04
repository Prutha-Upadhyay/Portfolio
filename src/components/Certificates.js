import { Container, Row, Col } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa"; // Import link icon from react-icons

export const Certificates = () => {
  // Certificates data: title, issuing organization, link to certificate
  const certificates = [
    {
      title: "Exploratory Data Analysis for Machine Learning",
      company: "Coursera",
      issueDate: "Jul 2024",
      url: "https://www.coursera.org/account/accomplishments/verify/JTE5VEXQ59UK"
    },
    {
      title: "HackNUthon 5.0",
      company: "Nirma University",
      issueDate: "Apr 2024",
      url: "https://drive.google.com/file/d/10xy5Z0XpakgKFSCy8pRwVOp4YnkOZXRi/view?usp=sharing"
    },
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      company: "Coursera",
      issueDate: "Feb 2024",
      url: "https://www.coursera.org/account/accomplishments/certificate/DZRXLBHC8MBS"
    },
    {
      title: "SWOC",
      company: "Social Winter of Code (SWOC)",
      issueDate: "Feb 2024",
      url: "https://drive.google.com/file/d/1hadGe4K53EU2wDj6g45_Jy_JLg8NR_Ta/view?usp=sharing"
    },
    {
      title: "Codekaze-Sep'23",
      company: "Coding Ninjas",
      issueDate: "Oct 2023",
      url: "https://ninjasfiles.s3.amazonaws.com/certificate_of_event_codekaze-sep_23_round_2_naukri_engineers_week_c3e21d9450a416407797.pdf"
    },
    {
      title: "Database Design and Basic SQL in PostgreSQL",
      company: "Coursera",
      issueDate: "Aug 2023",
      url: "https://www.coursera.org/account/accomplishments/verify/2A68X674BEQY"
    },
    {
      title: "Inheritance and Data Structures in Java",
      company: "Coursera",
      issueDate: "Aug 2023",
      url: "https://www.coursera.org/account/accomplishments/verify/5JJWNSQXYZEV"
    },
    {
      title: "Codekaze -June'2023",
      company: "Coding Ninjas",
      issueDate: "Jul 2023",
      url: "https://ninjasfiles.s3.amazonaws.com/certificate_of_event_codekaze_-_june_23_round_2_e8d74baebe78b2bd4ccb.pdf"
    },
    {
      title: "Introduction to Java",
      company: "Coursera",
      issueDate: "Feb 2023",
      url: "https://www.coursera.org/account/accomplishments/verify/S9YQW85E9R4R"
    },

  ];

  return (
    <section id="certificates" className="certificates-section">
      <Container>
        <h2>Certificates</h2>
        <Row>
          {certificates.map((certificate, index) => (
            <Col key={index} xs={12} sm={6} className="certificate-item mb-4">
              <div className="certificate-card">
                <h4 className="certificate-title">
                  {certificate.title} - {certificate.company}
                </h4>
                <p className="issue-date-container">
                  <span className="issue-date">{certificate.issueDate}</span>
                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-certificate-btn"
                    style={{ textDecoration: "inherit", color: "white" }}
                  >
                    
                  <FaExternalLinkAlt /> {/* Link icon */}
                  </a>

                
              </p>
            </div>
            </Col>
          ))}
      </Row>
    </Container>
    </section >
  );
};
