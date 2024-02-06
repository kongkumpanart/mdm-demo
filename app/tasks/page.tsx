import styles from '@/app/styles/table.module.css'
import styles2 from '@/app/styles/upload.module.css'

export default function Task() {
    return (
        <>
        <div className={styles2.buttonContainer}>
            <button className={styles2.uploadButton}>Search</button>
            <button className={styles2.uploadButton}>Delete</button>
        </div>

        <table className={styles.dataTable}>
                <thead>
                    <tr>
                        <th><input type="checkbox" id="selectAll" /></th>
                        <th>Filename</th>
                        <th>Progress</th>
                        <th>Started Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" className="rowCheckbox" /></td>
                        <td>Document1.csv</td>
                        <td>DONE</td>
                        <td>2024-01-25</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" className="rowCheckbox" /></td>
                        <td>Document2.csv</td>
                        <td>DONE</td>
                        <td>2024-01-24</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
        </table>
        </>

    );
  }