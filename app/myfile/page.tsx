import styles from '@/app/styles/table.module.css'
import styles2 from '@/app/styles/upload.module.css'
import SideNav from '@/components/SideNav';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import iconSearch from '@/public/search.png';
import iconDelete from '@/public/delete1.png';
import iconUpload from '@/public/upload.png';
import iconDeleteRed from '@/public/delete.png';
import iconEdit from '@/public/editing.png';


export default function MyFile() {
    return (
        <>
        <Navbar />
        <h1 className={styles.h1}>My File</h1>
        <div className={styles2.buttonContainer}>
            <button>
                <Image src={iconSearch} alt='search' width={24} height={24}></Image>
            </button>
            <button>
                <Image src={iconDelete} alt='del' width={28} height={28}></Image>
            </button>
            <button>
                <Image src={iconUpload} alt='upload' width={24} height={24}></Image>
            </button>
        </div>

        <table className={styles.dataTable}>
                <thead>
                    <tr>
                        <th><input type="checkbox" id="selectAll" /></th>
                        <th>Filename</th>
                        <th>Uploaded By</th>
                        <th>Uploaded Date</th>
                        <th>Modified Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" className="rowCheckbox" /></td>
                        <td>Document1.csv</td>
                        <td>User123</td>
                        <td>2024-01-25</td>
                        <td>2024-01-26</td>
                        <td>
                            <Button variant="outline">
                                <Image src={iconEdit} alt='edit' width={24} height={24}></Image>
                            </Button>
                            <Button variant="outline">
                                <Image src={iconDeleteRed} alt='delRed' width={24} height={24}></Image>
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" className="rowCheckbox" /></td>
                        <td>Document2.csv</td>
                        <td>User456</td>
                        <td>2024-01-24</td>
                        <td>2024-01-25</td>
                        <td>
                            <Button variant="outline">
                                <Image src={iconEdit} alt='edit' width={24} height={24}></Image>
                            </Button>
                            <Button variant="outline">
                                <Image src={iconDeleteRed} alt='delRed' width={24} height={24}></Image>
                            </Button>
                        </td>
                    </tr>
                </tbody>
        </table>
        <SideNav />
        <Footer />
        </>
    );
  }