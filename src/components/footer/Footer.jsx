import styled from "./Footer.module.css";

function Footer({ footerConfigs }) {
    return (
        <footer className={styled.footer}>
            <div className={styled.container}>
                {footerConfigs.sections.map((section) => (
                    <ul key={section.title}>
                        <li key={section.title}>{section.title}</li>
                        {
                            section.items.map(item => (
                                <li key={item.id} className={section?.single ? styled.single : ""}>{item.text}</li>
                            ))
                        }
                    </ul>
                ))}
            </div>
            <div className={styled.copyRight}>
                <p><br />© 2026 تمامی حقوق برای {footerConfigs.developer} محفوظ است.</p>
            </div>
        </footer>
    );
}

export default Footer;